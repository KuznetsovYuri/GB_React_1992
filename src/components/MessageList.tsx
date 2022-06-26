import React, { FC } from 'react';
import { AUTHOR } from '../constants';
import style from '../index.module.scss';
import { Message } from '../common-types';

interface MessageListProps {
  messages: Message[], 
  
}

const isMyMessage = (author) => (author === AUTHOR.user ? true : false);

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
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

};