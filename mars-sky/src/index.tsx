import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './util.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);