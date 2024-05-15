import React from 'react';
import { createRoot } from 'react-dom/client';  // Update this line
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { client } from './utils/apollo-client';

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
