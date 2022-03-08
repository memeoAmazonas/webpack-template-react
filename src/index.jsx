import { render } from 'react-dom';
import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Root from './view/layout/Root';

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
