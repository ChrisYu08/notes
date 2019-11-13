import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './Reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
const store = createStore(Reducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
     document.getElementById('root')
    );
