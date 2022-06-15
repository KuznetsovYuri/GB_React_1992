import React, { useEffect } from 'react';
import { MessageList } from './components/MessageList';
import { useState } from 'react';
import { AUTHOR } from './constants';
import { Form } from './components/Form';
import style from './index.module.scss';
import RenderChatslist from './components/Chats/ChatsList';

export const App = () => {
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
      <main className={style.main}>
        <div className={style.wrap}>
          <div className={style.chats}> <RenderChatslist/> </div>
          <div className={style.coverChat}>
            <div>
              <MessageList messages={messages} />
            </div>

            <div className={style.messages}>
              <Form addMessage={addMessage} />
            </div>
          </div>
        </div>
      </main>

    </>




  );
};
