import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/staatliches';
import '@fontsource/yeseva-one';
import '@fontsource-variable/comfortaa';

const theme = extendTheme({
  colors: {
    accent: "#f5a209",
  },
  fonts: {
    yesevaOne: `'Yeseva One', system-ui`,
    display: `'Staatliches', system-ui`,
    subHeader: `'ComfortaaVariable', system-ui`,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);