import React, { useEffect, useState } from 'react';
import { AUTHOR } from '../../constants';
import { MessageList } from '../../components/MessageList';
import { Form } from '../Form/Form';
import style from './ChatWindow.module.scss';


export const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const addMessage = (newMessage) => {
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