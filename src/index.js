import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

// Store 
import store from './store';

// Components
import App from './App';

// Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.Fragment>
);
