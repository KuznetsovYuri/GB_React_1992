import { ListItem } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { push, remove, set } from 'firebase/database';
import { getChatById, getMessageListById, messagesRef } from '../../../services/firebase';

interface ChatListProps {
  chats: any[];
  messagesDB: any;
}

export const ChatList: FC<ChatListProps> = ({ chats, messagesDB }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      set(messagesRef, {
        ...messagesDB,
        [value]: {
          name: value,
        },
      });

      push(getMessageListById(value), {
        text: 'Chat has been created',
        author: 'Admin',
      });

      setValue('');
    }
  };

  const handleDeleteChat = (chatId: string) => {
    remove(getChatById(chatId));
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => handleDeleteChat(chat.id)}>X</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Create Chat</button>
      </form>
    </>
  );
};


