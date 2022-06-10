import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import { AppProvider } from './AppContext';
import GlobalStyles from './GlobalStyles';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppProvider>
        <GlobalStyles />
        <App />
      </AppProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
