import { Box, Text, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" py={4} mt={10} bg="gray.800" color="gray.200">
      <Flex justify="center" align="center">
        <Text fontSize="sm">
          © {new Date().getFullYear()} Michelle Pérez — Todos los derechos reservados
        </Text>
      </Flex>
    </Box>
  );
}