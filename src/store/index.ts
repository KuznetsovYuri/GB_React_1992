import { createStore, compose, combineReducers } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { messageReducer, MessagesState } from './messages/reducer'

// export const composeEnhancers = 
//     window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

// export const store = createStore(profileReducer, composeEnhancers());

export type StoreState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 