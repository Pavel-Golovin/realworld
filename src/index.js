import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import App from './components/App/App';
import './index.scss';

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  , document.getElementById('root'));
