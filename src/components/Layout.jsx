import { Box, Flex } from '@chakra-ui/react';
import Avatar from "./Avatar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      <Flex flexWrap={'wrap'} p={5} mt={{ base: "120px", md: "80px" }} justifyContent={'center'}>
        <Box flexShrink={0} flexGrow={0} flexBasis="400px"  mr={{ base: 0, md: 5 }} mb={{ base: 5, md: 0 }}>
          <Avatar />
        </Box>
        <Box flexShrink={0} flexGrow={1} flexBasis="700px" p={25} boxShadow="lg" borderRadius="md"   ml="auto">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
