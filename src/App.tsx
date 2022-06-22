import React, { FC } from 'react';

import style from './index.module.scss';
import { RenderChatslist } from './components/Chats/ChatList/ChatList';

import { ChatWindow } from './components/Chats/ChatWindow';



export const App: FC = () => {
 

  return (

    <>
      <main className={style.main}>
        <div className={style.wrap}>
          <div className={style.chats}> <RenderChatslist /> </div>
          <div className={style.coverChat}>
            <ChatWindow />
          </div>
        </div>
      </main>

    </>




  );
};
