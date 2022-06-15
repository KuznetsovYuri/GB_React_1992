import React from 'react';
import { AUTHOR } from '../constants';
import style from '../index.module.scss';

const isMyMessage = (author) => (author === AUTHOR.user ? true : false);

export const MessageList = ({ messages }) => {
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