import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { profileReducer } from './profile/reducer';
import { messageReducer } from './messages/reducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['profile'],
};

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);