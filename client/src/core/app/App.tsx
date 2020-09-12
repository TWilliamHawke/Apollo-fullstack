import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';

import { Navbar } from 'src/layouts/Navbar';

import { client } from '../client';

import "./style.scss";
import { GlobalStateProvider } from 'src/shared/store/GlobalState';
import TopErrorMessage from 'layouts/TopErrorMessage/TopErrorMessage';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'core/routes/Routes';
import { ErrorBoundary } from 'shared/components/ErrorBoundary';
import 'normalize.css'

const App: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <GlobalStateProvider>
          <ApolloProvider client={client}>
            {/* body start */}
              <TopErrorMessage />
              <Navbar />
              <div className="container">
                <Routes />
              </div>
            {/* body end */}
          </ApolloProvider>
        </GlobalStateProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );

};

export default App;