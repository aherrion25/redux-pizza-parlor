import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const customer = (state = '', action) => {
    console.log(action.payload);
    if(action.type === 'SET_CUSTOMER'){
        return action.payload;
    }
    return state;
}
const address = (state = '', action) => {
    if (action.type === 'SET_ADDRESS'){
        return action.payload;
    } else if (action.type === 'CLEAR_ALL'){
        return '';
    }
}

const pizzaList = ( state = [], action) => {
    if(action.type === 'SET_PIZZA') {
        return action.payload
    }
    return state 
}

const cart = ( state = [],  action) => {
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR_CART'){
        return [];
    } else {
        return state;
    }
}


const storeInstance = createStore(
    

    combineReducers(
        {
            customer,
            address,
            pizzaList,
            cart,

        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}>
                    <App />
                </Provider>, document.getElementById('root'));
