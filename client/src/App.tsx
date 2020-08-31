import React, { FC } from 'react';
import "./style.scss";


import { client } from './core/client';
import { ApolloProvider } from '@apollo/client';
import { AuthPage } from './layouts/auth/AuthPage';



const App: FC = () => {
  return (
    // eslint-disable-next-line
    <ApolloProvider client={client}>
    <div className="container">
      <AuthPage />
      <h1>Hello World</h1>
      <div className="logo"></div>
    </div>
    </ApolloProvider>
  );
};

export default App;