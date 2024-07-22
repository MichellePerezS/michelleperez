// src/components/Avatar.js
import { Box, Card, CardBody, Text, Heading, Image, Stack, CardFooter, CardHeader, Flex } from '@chakra-ui/react';
import Icons from './Icons';
import React from 'react';

export default function Avatar() {
  return (
    <Card 
      w={{ base: '100%', sm: '90%', md: '400px', lg: '450px' }} 
      h="auto" 
      boxShadow='dark-lg' 
      p='1px' 
      rounded='lg' 
      bg="transparent" 
      position={{ base: 'relative', md: 'relative' }} 
      top={{ base: '0', md: '0' }} 
      left={{ base: '0', md: '0' }} 
      zIndex={2}
      mx={{ base: 'auto', md: '0' }} 
      mt={{ base: '0', md: '0' }}  
    >
      <CardHeader p={1}>
        <Flex alignItems='center'>
          <Image 
            boxSize={{ base: '100px', sm: '130px', lg: '150px' }}  
            src='./mpT.png'
            alt='Logo'
          />
          <Box p='1'>
            <Heading size={{ base: 'md', sm: 'lg', lg: 'xl' }}>Michelle Pérez</Heading> 
          </Box>
        </Flex>
      </CardHeader>
      <CardBody align="center" p={1}>
        <Image 
          borderRadius='10px'
          boxSize={{ base: '150px', sm: '230px', lg: '250px' }} 
          objectFit='cover'
          src='./michelleprofile.jpg'  
          alt="Michelle's Profile"
        />
        <Box p={1} align="left" maxW={{ base: '100%', sm: '250px', lg: '300px' }}> 
          <Stack spacing={1} mt={4} align="left">
            <Text as='b' fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}>Junior Developer</Text> 
            <Text as="b" fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>Programming Languages:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>• Python, JavaScript</Text>
            <Text as="b" fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>Web Development:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>• HTML, CSS, ReactJS</Text>
            <Text as="b" fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>Database Systems:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>• SQL</Text>
            <Text as="b" fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>DevOps & Testing Tools:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>• Git</Text>
          </Stack>
        </Box>
      </CardBody>
      <CardFooter justifyContent="center">
        <Icons />
      </CardFooter>
    </Card>
  );
}