import React, { FC, useEffect, useState } from 'react';
import { AUTHOR } from '../../constants';
import { MessageList } from '../MessageList';
import { Form } from '../Form/Form';
import style from './ChatWindow.module.scss';

interface ChatWindowProps {
  author: string;
  text: string;
}

const msg: Array<ChatWindowProps> = [];


export const ChatWindow: FC = () => {
    const [messages, setMessages] = useState<ChatWindowProps[]>(msg);;
    const addMessage = (newMessage: ChatWindowProps) => {
      setMessages([...messages, newMessage]);
    };
  
    useEffect(() => {
      if (messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
        const timeout = setTimeout(() => {
          addMessage({
            author: AUTHOR.bot,
            text: "I'm bot"
          });
        },
          1000);
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [messages]);
  
    return (
  
      <>
            <div>
              <MessageList messages={messages} />
            </div>
            <div className={style.messages}>
              <Form addMessage={addMessage} />
            </div>
  
      </>
  
    );
  };