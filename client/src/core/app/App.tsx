import React, { FC } from 'react';
//wrappers
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ErrorBoundary } from 'shared/components/ErrorBoundary';
import { GlobalStateProvider } from 'shared/store/GlobalState';
//components
import { Navbar } from 'layouts/Navbar';
import { TopErrorMessage } from 'layouts/TopErrorMessage';
import { Routes } from 'core/routes';
//data for providers
import { client } from '../Apollo/client';
//styles
import "./style.scss";
import 'normalize.css'
import './buttons.scss'

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