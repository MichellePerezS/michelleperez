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
import { MoonIcon, SunIcon, EmailIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import HeaderIcons from './HeaderIcons';

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Flex 
        as="nav" 
        p="20px" 
        justifyContent={{ base: 'center', lg: 'space-around' }} 
        alignItems="center"
        width='100%' 
        position="fixed" 
        backdropFilter='blur(10px)' 
        zIndex={10}
        flexWrap="wrap"
        display={{ base: 'none', lg: 'flex' }} 
      >
        <Box display={{ base: 'none', lg: 'block' }} width='200px'></Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <Stack direction={{ base: 'column', lg: 'row' }} spacing={5} align='center'>
              <Link as={RouterLink} to="/">
                <Button colorScheme='blue' variant='outline'>About</Button>
              </Link>
              <Link as={RouterLink} to="/portfolio">
                <Button colorScheme='blue' variant='outline'>Portfolio</Button>
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
            colorScheme='blue' 
            variant='outline'
            src="./MichellePerez.pdf"
          >
            Resume
          </Button>
        </ButtonGroup>
      </Flex>

      <HeaderIcons />  {/* Usamos el nuevo componente aquí */}
    </>
  );
}