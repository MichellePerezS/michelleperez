// src/components/Layout.js
import { Box, Flex } from '@chakra-ui/react';
import Avatar from "./Avatar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex 
        flexGrow={1} 
        p={5} 
        mt={{ base: "120px", md: "80px" }} 
        flexDirection={{ base: "column", md: "row-reverse" }} 
        justifyContent={{ base: "center", md: "space-between", lg: "space-around" }}
      >
        <Box 
          flexShrink={0} 
          mr={{ base: 0, md: 3 }} 
          mb={{ base: 5, md: 0 }} 
          maxWidth={{ base: '100%', md: '400px', lg: '450px' }} 
          order={{ base: 1, md: 2 }}
        >
          <Avatar />
        </Box>
        <Box 
          p={{ base: 2, md: 0 }} 
          boxShadow="lg" 
          borderRadius="md" 
          width="100%" 
          maxWidth={{ base: '100%', md: '800px', lg: '1000px' }} 
          overflow="auto" 
          order={{ base: 2, md: 1 }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}