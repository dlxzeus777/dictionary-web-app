import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'

import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={false}>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);