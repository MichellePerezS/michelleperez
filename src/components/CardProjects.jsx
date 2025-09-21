// src/components/CardProjects.jsx
import { Card, CardBody, CardFooter, Button, Badge, Image, Stack, Box, Link } from '@chakra-ui/react';
import React from 'react';

export default function CardProjects({ source, reference, bd, bd2 }) {
  return (
    <Card 
      maxW={{ base: '100%', md: 'sm' }} 
      h="280px" 
      display="flex" 
      flexDirection="column"
      boxShadow="lg" 
      borderRadius="lg" 
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-8px)", boxShadow: "xl" }}
    >
      {/* Imagen */}
      <Image src={source} alt={bd} objectFit="cover" h="150px" w="100%" />

      {/* Cuerpo */}
      <CardBody flex="1" display="flex" flexDirection="column" justifyContent="flex-start">
        <Stack spacing={3}>
          <Box>
            <Badge variant="subtle" colorScheme="green" mr={2}>{bd}</Badge>
            <Badge variant="subtle" colorScheme="red">{bd2}</Badge>
          </Box>
        </Stack>
      </CardBody>

      {/* Footer (botón abajo siempre alineado) */}
      <CardFooter mt="auto">
        <Link href={reference} isExternal w="100%">
          <Button w="100%" colorScheme="blue">
            Code
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}