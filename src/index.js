import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import thunk from "redux-thunk" 

import { createStore, applyMiddleware } from "redux";
import TodoListReducer from "./pages/todoSetup/reducers";

import './index.css';
import App from './App';

const store = createStore(TodoListReducer,undefined, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.Fragment>
);
