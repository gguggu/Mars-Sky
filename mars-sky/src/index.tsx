import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './util.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  return (
    // <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </Provider>
  );
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);