// src/components/Avatar.jsx
import { Card, CardBody, CardFooter, CardHeader, Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Icons from './Icons';
import React from 'react';

export default function Avatar() {
  return (
    <Card
      w={{ base: '100%', md: '320px', lg: '360px' }}
      boxShadow="dark-lg"
      rounded="lg"
      bg="transparent"
    >
      <CardHeader p={3}>
        <Flex align="center" gap={3}>
          <Image
            src="/mpT.png"           
            alt="Logo personal de Michelle"
            boxSize={{ base: '56px', md: '100px' }}
          />
          <Heading size={{ base: 'md', md: 'lg' }}>Michelle Pérez</Heading>
        </Flex>
      </CardHeader>

      <CardBody pt={0}>
        <Image
          src="/michelleprofile.jpg" 
          alt="Foto de Michelle Pérez"
          borderRadius="md"
          objectFit="contain"
          w="100%"
          h={{ base: '220px', md: '260px' }}
          mb={3}
        />

        <Stack spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
          <Text as="b">Software Developer</Text>
          <Box>
            <Text as="b">Stack:</Text>
            <Text>React, JavaScript · Python</Text>
          </Box>
          <Box>
            <Text as="b">Web:</Text>
            <Text>HTML, CSS, Chakra UI</Text>
          </Box>
          <Box>
            <Text as="b">Datos & Tools:</Text>
            <Text>SQL, Git</Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter justifyContent="center" pt={0} pb={4}>
        <Icons />
      </CardFooter>
    </Card>
  );
}