// src/pages/Post.jsx
import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box, Heading, Text, Divider, Stack, Tag,
  Link, Image, Alert, AlertIcon, Button, useColorModeValue
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "../services/blog";

// Mapeo de elementos markdown -> componentes Chakra
const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" mt={8} mb={4} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" mt={8} mb={3} {...props} />,
  h3: (props) => <Heading as="h3" size="md" mt={6} mb={2} {...props} />,
  p:  (props) => <Text lineHeight={1.9} my={3} {...props} />,
  a:  (props) => <Link color="blue.400" isExternal {...props} />,
  img: ({ src, alt }) => (
    <Image src={src} alt={alt} my={4} borderRadius="md" maxW="100%" />
  ),
  ul: (props) => <Box as="ul" pl={6} my={3} {...props} />,
  ol: (props) => <Box as="ol" pl={6} my={3} {...props} />,
  li: (props) => <Box as="li" my={1} {...props} />,
  code: (props) => (
    <Box
      as="code"
      px={1.5}
      py={0.5}
      borderRadius="md"
      bg={useColorModeValue("gray.100", "gray.700")}
      fontFamily="mono"
      fontSize="0.95em"
      {...props}
    />
  ),
  pre: (props) => (
    <Box
      as="pre"
      p={4}
      my={4}
      overflowX="auto"
      borderRadius="md"
      bg={useColorModeValue("gray.100", "gray.800")}
      {...props}
    />
  ),
  blockquote: (props) => (
    <Box
      borderLeftWidth="4px"
      borderColor={useColorModeValue("gray.300", "gray.600")}
      pl={4}
      my={4}
      color={useColorModeValue("gray.700", "gray.300")}
      {...props}
    />
  ),
};

export default function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <Box p={4} boxShadow="lg" borderRadius="md">
        <Alert status="error" borderRadius="md" mb={4}>
          <AlertIcon />
          Post not found.
        </Alert>
        <Button as={RouterLink} to="/blog" colorScheme="blue">
          ← Back to blog
        </Button>
      </Box>
    );
  }

  return (
    <Box p={4} boxShadow="lg" borderRadius="md">
      {/* SEO */}
      <Helmet>
        <title>{post.title} · Michelle Pérez — Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://michelle-perez.web.app/blog/${post.slug}`} />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Cabecera */}
      <Stack spacing={2} mb={5}>
        <Heading as="h1" size="xl">{post.title}</Heading>
        <Text color="gray.500">{post.date}</Text>
        {post.tags?.length ? (
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {post.tags.map((t) => (
              <Tag key={t} colorScheme="blue">{t}</Tag>
            ))}
          </Stack>
        ) : null}
      </Stack>

      {post.image ? (
        <Image
          src={post.image}
          alt={post.title}
          borderRadius="md"
          mb={6}
          maxH="360px"
          objectFit="cover"
        />
      ) : null}

      <Divider my={4} />

      {/* Contenido Markdown */}
      <Box
        className="post-content"
        sx={{
          // pequeños ajustes al contenido
          "table": { width: "100%", borderCollapse: "collapse", my: 4 },
          "th, td": {
            borderWidth: "1px",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            p: 2,
          },
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={MDXComponents}>
          {post.content}
        </ReactMarkdown>
      </Box>

      <Divider my={6} />

      <Button as={RouterLink} to="/blog" colorScheme="blue">
        ← Back to blog
      </Button>
    </Box>
  );
}