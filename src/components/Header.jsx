import {
  Flex, ButtonGroup, Button, useColorMode, IconButton,
  Breadcrumb, BreadcrumbItem, Box, Stack
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderIcons from './HeaderIcons';

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const base = import.meta.env.BASE_URL; // para PDF/estáticos desde /public

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Flex
        as="nav"
        p="20px"
        justifyContent={{ base: 'center', lg: 'space-around' }}
        alignItems="center"
        width="100%"
        position="fixed"
        top="0"
        transition="all 0.3s ease"
        backdropFilter={scrolled ? 'blur(12px)' : 'none'}
        bg={scrolled ? (colorMode === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(15,17,21,0.7)') : 'transparent'}
        boxShadow={scrolled ? 'md' : 'none'}
        zIndex={10}
        flexWrap="wrap"
        display={{ base: 'none', lg: 'flex' }}
      >
        <Box display={{ base: 'none', lg: 'block' }} width="100px" />
        <Breadcrumb>
          <BreadcrumbItem>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={5} align="center">
              <Button as={RouterLink} to="/" colorScheme="blue" variant="outline">About</Button>
              <Button as={RouterLink} to="/portfolio" colorScheme="blue" variant="outline">Portfolio</Button>
              <Button as={RouterLink} to="/blog" colorScheme="blue" variant="outline">Blog</Button>
              <Button as={RouterLink} to="/contact" colorScheme="blue" variant="outline">Contact</Button>
            </Stack>
          </BreadcrumbItem>
        </Breadcrumb>
        <ButtonGroup width={{ base: '100%', lg: '150px' }} justifyContent={{ base: 'center', lg: 'flex-end' }}>
          <IconButton
            fontSize="20px"
            variant="ghost"
            aria-label="Toggle Dark/Light Mode"
            colorScheme="blue"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={6} />}
          />
          <Button
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            variant="outline"
            href={`${base}MichellePerezS.pdf`} // en public/
          >
            Resume
          </Button>
        </ButtonGroup>
      </Flex>

      <HeaderIcons />
    </>
  );
}