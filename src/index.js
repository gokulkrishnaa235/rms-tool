import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import creditDebitCalculator from './store/reducers/creditDebitCalculator';

const rootReducer = combineReducers({
    creditDebitCalculator: creditDebitCalculator,
    
});

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
            <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

