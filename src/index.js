import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import StateProvider from './state/StateProvider';

render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
