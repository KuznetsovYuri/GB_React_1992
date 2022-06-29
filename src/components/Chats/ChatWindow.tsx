import React, { useMemo, FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Authors, Chat, Message, Messages } from '../../common-types';
import { Header } from '../Header';
import { Main } from '../../pages/Main';
// import { Profile } from '../../pages/Profile';
import { ChatList } from '../Chats/ChatList/ChatList';
import { ChatPage } from '../../pages/Pages';

const Profile = React.lazy(() =>
  Promise.all([
    import('../../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 2000)),

  ]).then(([moduleExports]) => moduleExports)

);


const defaultMessages: Messages = {
  default: [
    {
      author: Authors.USER,
      text: '1',
    },
    {
      author: Authors.USER,
      text: '2',
    },
  ],
};


export const ChatWindow: FC = () => {
  const [messages, setMessages] = useState(defaultMessages);

  const chats = useMemo(
    () =>
      Object.keys(messages).map((chat) => ({
        id: nanoid(),
        name: chat,
      })),
    [Object.keys(messages).length]
  );

  const onAddChat = (newChat: Chat) => {
    setMessages({
      ...messages,
      [newChat.name]: [],
    });
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  const onDeleteChat = (name: string) => {
    const newMessages = { ...messages };
    delete newMessages[name];
    setMessages(newMessages);
  };

  return (

    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats">
          <Route
            index
            element={<ChatList chats={chats} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />}
          />
          <Route
            path=":chatId"
            element={
              <ChatPage
                chats={chats}
                onAddChat={onAddChat}
                messages={messages}
                onAddMessage={onAddMessage}
                onDeleteChat={onDeleteChat}
              />
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<h2>404 page</h2>} />
    </Routes>

  );
};