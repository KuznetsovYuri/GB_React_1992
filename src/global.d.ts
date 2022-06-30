import { compose } from 'redux';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENTION_COMPOSE__?: typeof compose;
    }
}

export {};