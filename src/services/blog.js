// src/services/blog.js
// Carga los .md como TEXTO y los parsea (sin fs/path).
// Soporta ruta absoluta y relativa según el bundler.
const abs = import.meta.glob('/src/posts/**/*.md', { as: 'raw', eager: true });
const rel = import.meta.glob('../posts/**/*.md', { as: 'raw', eager: true });

// combina ambos (por si uno no encuentra)
const modules = { ...abs, ...rel };

function parseFrontmatter(raw) {
  if (typeof raw !== 'string') return { meta: {}, content: '' };

  const match = /^---\n([\s\S]*?)\n---/.exec(raw);
  let meta = {};
  let content = raw;

  if (match) {
    content = raw.slice(match[0].length);
    meta = match[1].split('\n').reduce((acc, line) => {
      const i = line.indexOf(':');
      if (i === -1) return acc;
      const key = line.slice(0, i).trim();
      let val = line.slice(i + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      acc[key] = val;
      return acc;
    }, {});
    // normaliza tags
    if (meta.tags && typeof meta.tags === 'string') {
      try { meta.tags = JSON.parse(meta.tags); }
      catch { meta.tags = meta.tags.split(',').map(s => s.trim()).filter(Boolean); }
    }
  }
  return { meta, content: content.trim() };
}

function slugFromPath(p) {
  if (!p) return '';
  const last = p.split('/').pop() || '';
  return last.replace(/\.md$/, '').replace(/\s+/g, '-').toLowerCase();
}

export function getAllPosts() {
  const posts = Object.entries(modules).map(([filePath, raw]) => {
    if (!raw) return null; // evita undefined
    const slug = slugFromPath(filePath);
    const { meta, content } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug || 'untitled',
      date: meta.date || '',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      summary: meta.summary || '',
      cover: meta.cover || '',
      content
    };
  }).filter(Boolean);

  // ordena por fecha desc si está en formato ISO (YYYY-MM-DD)
  posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return posts;
}

export function getPostBySlug(slug) {
  const entry = Object.entries(modules).find(([filePath]) => filePath.endsWith(`${slug}.md`));
  if (!entry) return null;
  const raw = entry[1];
  if (!raw) return null;

  const { meta, content } = parseFrontmatter(raw);
  return {
    slug,
    title: meta.title || slug || 'untitled',
    date: meta.date || '',
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    summary: meta.summary || '',
    cover: meta.cover || '',
    content
  };
}