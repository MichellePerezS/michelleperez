// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Layout from './components/Layout';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './pages/Post';

function App() {
  // NO metas BrowserRouter/HashRouter aquí: ya está en main.jsx
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        {/* Fallback opcional */}
        {/* <Route path="*" element={<About />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;