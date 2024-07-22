// src/components/CardProjects.js
import { Card, CardBody, CardFooter, Button, Badge, Image, Stack, Box, Link } from '@chakra-ui/react';
import React from 'react';

export default function CardProjects({ source, reference, bd, bd2 }) {
  return (
    <Card maxW={{ base: '100%', md: 'sm' }} boxShadow="lg" borderRadius="lg" overflow="hidden">
      <Image src={source} alt={bd} borderRadius="lg" />
      <CardBody>
        <Stack spacing={3}>
          <Box>
            <Badge variant="subtle" colorScheme="green" mr={2}>{bd}</Badge>
            <Badge variant="subtle" colorScheme="red">{bd2}</Badge>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link href={reference} isExternal w="100%">
          <Button 
            w="100%" 
            colorScheme="blue"
          >
            Code
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}