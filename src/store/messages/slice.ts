import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AddMessage, MessageWithId } from './types';
import { Authors } from '../../common-types';
import { nanoid } from 'nanoid';

type MessagesState = Record<string, MessageWithId[]>;

const initialState: MessagesState = {
    default: [
        {
            id: '1',
            author: Authors.USER,
            text: 'Welcome',
        },
    ],
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addChat(state, action: PayloadAction<{ name: string }>) {
            state[action.payload.name] = [];
        },
        deleteChat(state, action: PayloadAction<{ name: string }>) {
            delete state[action.payload.name];
        },
        addMessage(state, action: PayloadAction<AddMessage>) {
            state[action.payload.chatName].push({
                id: nanoid(),
                author: action.payload.message.author,
                text: action.payload.message.text,
            });
        },
    },
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply = createAsyncThunk('messages/addMessageWithReply',
    async ({ chatName, message }: AddMessage, { dispatch }) => {
        dispatch(addMessage({ chatName, message }));
        if (message.author !== Authors.BOT) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                dispatch(addMessage({
                    chatName,
                    message: {
                        author: Authors.BOT,
                        text: 'Im bot'
                    }
                }));
            }, 1000);

        }
    });

export const { addChat, deleteChat, addMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;