import { Message } from '../../common-types';

export type MessageWithId = { id: string } & Message;

export interface AddMessage {
    chatName: string;
    message: Message;
}