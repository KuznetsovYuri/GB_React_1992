import React, { FC } from 'react';
import style from '../index.module.scss'
import { Message } from '../store/messages/reducer';
import { AUTHOR } from '../constants';

interface MessageListProps {
  messages: Message[];
}

const isMyMessage = (author) => (author === AUTHOR.user ? true : false);
export const MessageList: FC<MessageListProps> = ({ messages }) => (
    <ul>
      {messages.map((message, idx) => (
        <li
          className={
            style['chatMessage'] + (isMyMessage(message.author) ? ' ' + style['chatMessage__my'] : '')

          }
          key={idx}>
          <div>{message.author + ':'}</div>

          <div>{message.text}</div>

        </li>
      ))}
    </ul>
  );


