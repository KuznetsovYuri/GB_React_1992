import { createStore, compose } from 'redux';
import { profileReducer } from './profile/reducer';

// export const composeEnhancers = 
//     window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

// export const store = createStore(profileReducer, composeEnhancers());

export const store = createStore(
    profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 