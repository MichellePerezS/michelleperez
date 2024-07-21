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
      position={{ base: 'relative', md: 'fixed' }} 
      top={{ base: '0', md: '40px' }} 
      left={{ base: '0', md: '100px', lg: '150px' }} 
      zIndex={2}
      mx={{ base: 'auto', md: '0' }} 
      mt={{ base: '0', md: '0' }}  
    >
      <CardHeader p={1}>
        <Flex alignItems='center'>
          <Image 
            boxSize={{ base: '100px', sm: '130px' }}  
            src='./mpT.png'
            alt='Logo'
          />
          <Box p='1'>
            <Heading size={{ base: 'md', sm: 'lg' }}>Michelle Pérez</Heading> 
          </Box>
        </Flex>
      </CardHeader>
      <CardBody align="center" p={1}>
        <Image 
          borderRadius='10px'
          boxSize={{ base: '150px', sm: '230px' }} 
          objectFit='cover'
          src='./michelleprofile.jpg'  
          alt="Michelle's Profile"
        />
        <Box p={1} align="left" maxW={{ base: '100%', sm: '250px' }}> 
          <Stack spacing={1} mt={4} align="left">
            <Text as='b' fontSize={{ base: 'md', sm: 'lg' }}>Junior Developer</Text> 
            <Text as="b" fontSize={{ base: 'sm', sm: 'md' }}>Programming Languages:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md' }}>• Python, JavaScript</Text>
            <Text as="b" fontSize={{ base: 'sm', sm: 'md' }}>Web Development:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md' }}>• HTML, CSS, ReactJS</Text>
            <Text as="b" fontSize={{ base: 'sm', sm: 'md' }}>Database Systems:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md' }}>• SQL</Text>
            <Text as="b" fontSize={{ base: 'sm', sm: 'md' }}>DevOps & Testing Tools:</Text>
            <Text fontSize={{ base: 'sm', sm: 'md' }}>• Git</Text>
          </Stack>
        </Box>
      </CardBody>
      <CardFooter justifyContent="center">
        <Icons />
      </CardFooter>
    </Card>
  );
}