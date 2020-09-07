import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';

import { Navbar } from 'src/layouts/Navbar';

import { client } from '../client';

import "./style.scss";
import { GlobalStateProvider } from 'src/shared/store/GlobalState';
import TopErrorMessage from 'layouts/TopErrorMessage/TopErrorMessage';



const App: FC = () => {
  return (
    <GlobalStateProvider>
      <ApolloProvider client={client}>
        <TopErrorMessage />
        <Navbar />
        <div className="container">
          <h1>Hello World</h1>

          <div className="logo"></div>
        </div>
      </ApolloProvider>
    </GlobalStateProvider>
  );

};

export default App;