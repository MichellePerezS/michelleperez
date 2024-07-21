import { Box, Flex } from '@chakra-ui/react';
import Avatar from "./Avatar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex flexGrow={1} p={5} mt={{ base: "120px", md: "80px" }} flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "center", md: "flex-end" }}>
        <Box flexShrink={0} mr={{ base: 0, md: 3 }} mb={{ base: 5, md: 0 }} maxWidth={{ base: '100%', md: '400px' }}>
          <Avatar />
        </Box>
        <Box p={{ base: 2, md: 0 }} boxShadow="lg" borderRadius="md" width="100%" maxWidth="800px" overflow={'auto'}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}