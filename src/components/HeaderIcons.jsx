import { Box, ButtonGroup, IconButton, Link, useColorMode, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon, ChatIcon, InfoIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function HeaderIcons() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box 
      position="fixed" 
      bottom="0" 
      width="100%" 
      backdropFilter="blur(10px)" 
      bg="transparent"
      py={3}
      zIndex={10}
      display={{ base: 'block', lg: 'none' }} 
    >
      <ButtonGroup spacing={4} justifyContent="center" width="100%">
        <IconButton
          fontSize='20px'
          variant="ghost"
          aria-label="Toggle Dark/Light Mode"
          colorScheme='blue'
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <SunIcon boxSize={6} /> : <MoonIcon boxSize={6} />}
        />  
        <Link as={RouterLink} to="/">
          <IconButton
            fontSize='20px'
            variant="ghost"
            aria-label="Home"
            colorScheme='blue'
            icon={<InfoIcon boxSize={6} />}
          />
        </Link>
        <Link as={RouterLink} to="/portfolio">
          <IconButton
            fontSize='20px'
            variant="ghost"
            aria-label="Portfolio"
            colorScheme='blue'
            icon={<HamburgerIcon boxSize={6} />}
          />
        </Link>
        <Link as={RouterLink} to="/contact">
          <IconButton
            fontSize='20px'
            variant="ghost"
            aria-label="Contact"
            colorScheme='blue'
            icon={<ChatIcon boxSize={6} />}
          />
        </Link>
        <Button 
          as="a"
          target='_blank'
          colorScheme='blue' 
          variant='outline'
          src='./CVMichellePérez.pdf'
        >
          Resume
        </Button>
      </ButtonGroup>
    </Box>
  );
}