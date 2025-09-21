import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Headline from '../components/Headline';
import TitlePages from '../components/TitlePages';
import { getAllPosts } from '../services/blog';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Box>
      <Headline title="Blog" />
      <TitlePages title="Latest notes" />

      <Box maxW="1200px" mx="auto" px={4}>
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={6} 
          justifyItems="center"
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}