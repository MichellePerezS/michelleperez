import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Tag,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={5}
      maxW="sm"
      w="100%"
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          borderRadius="md"
          mb={4}
        />
      )}
      <Stack spacing={3}>
        <Heading size="md">{post.title}</Heading>
        <Text fontSize="sm" color="gray.500">
          {post.date}
        </Text>
        <Text noOfLines={3}>{post.excerpt}</Text>
        <Stack direction="row" spacing={2}>
          {post.tags?.map((tag, idx) => (
            <Tag key={idx} colorScheme="blue">
              {tag}
            </Tag>
          ))}
        </Stack>
        <Link to={`/blog/${post.slug}`}>
          <Button colorScheme="blue" size="sm">
            Read more
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}