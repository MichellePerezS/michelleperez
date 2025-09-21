// src/components/Layout.js
import { Box, Flex } from '@chakra-ui/react';
import Avatar from "./Avatar";
import Header from "./Header";
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  //If we are in blog, hide Avatar
  const isBlog = location.pathname.startsWith("/blog");
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex 
        flexGrow={1} 
        p={5} 
        mt={{ base: "120px", md: "80px" }} 
        flexDirection={{ base: "column", md: isBlog ? "column" : "row-reverse" }} 
        justifyContent={{ base: "center", md: isBlog ? "center" : "space-between" }}
        gap={{ base: 6, md: 10 }}
      >
        {!isBlog && (
        <Box 
          flexShrink={0} 
          mr={{ base: 0, md: 3 }} 
          mb={{ base: 5, md: 0 }} 
          maxWidth={{ base: '100%', md: '400px', lg: '450px' }} 
          order={{ base: 1, md: 2 }}
          ml={{ base: 0, md: 5, lg: 10 }}
        >
          <Avatar />
        </Box>
        )}
        <Box 
          p={{ base: 2, md: 0 }} 
          boxShadow="lg" 
          borderRadius="md" 
          width="100%" 
          maxWidth={{ base: '100%', md: '700px', lg: '1000px' }} 
          overflow="auto" 
          order={{ base: 2, md: 1 }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}