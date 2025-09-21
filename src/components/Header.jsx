import { 
  Flex, 
  ButtonGroup,
  Button,
  useColorMode,
  IconButton,  
  Breadcrumb,
  BreadcrumbItem,
  Box,
  Link,
  Stack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderIcons from './HeaderIcons';

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // cuando haces scroll más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Flex 
        as="nav" 
        p="20px" 
        justifyContent={{ base: 'center', lg: 'space-around' }} 
        alignItems="center"
        width='100%' 
        position="fixed" 
        top="0"
        transition="all 0.3s ease"
        backdropFilter={scrolled ? 'blur(12px)' : 'none'}
        bg={scrolled ? (colorMode === "light" ? "rgba(255,255,255,0.7)" : "rgba(15,17,21,0.7)") : "transparent"}
        boxShadow={scrolled ? "md" : "none"}
        zIndex={10}
        flexWrap="wrap"
        display={{ base: 'none', lg: 'flex' }} 
      >
        <Box display={{ base: 'none', lg: 'block' }} width='100px'></Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={5} align='center'>
              <Link as={RouterLink} to="/">
                <Button colorScheme='blue' variant='outline'>About</Button>
              </Link>
              <Link as={RouterLink} to="/portfolio">
                <Button colorScheme='blue' variant='outline'>Portfolio</Button>
              </Link>
              <Link as={RouterLink} to="/blog">
                <Button colorScheme='blue' variant='outline'>Blog</Button>
              </Link>
              <Link as={RouterLink} to="/contact">
                <Button colorScheme='blue' variant='outline'>Contact</Button>
              </Link>
            </Stack>
          </BreadcrumbItem>
        </Breadcrumb>
        <ButtonGroup width={{ base: '100%', lg: '150px' }} justifyContent={{ base: 'center', lg: 'flex-end' }}>
          <IconButton
              fontSize='20px'
              variant="ghost"
              aria-label="Toggle Dark/Light Mode"
              colorScheme='blue'
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={6} />}
          />   
          <Button 
            as="a"
            target='_blank'
            rel="noopener noreferrer"
            colorScheme='blue' 
            variant='outline'
            href="/MichellePérezS.pdf"
          >
            Resume
          </Button>
        </ButtonGroup>
      </Flex>

      <HeaderIcons />
    </>
  );
}