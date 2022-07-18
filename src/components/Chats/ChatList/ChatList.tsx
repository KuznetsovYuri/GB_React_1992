import { ListItem } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addChat, deleteChat } from '../../../store/messages/slice';
import { selectChats } from '../../../store/messages/selectors';
import React from 'react';

export const ChatList: FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chats = useSelector(selectChats,
    (prev, next) => prev.length === next.length);

  useEffect(() => {
    console.log('chat changed');
  }, [chats]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      dispatch(addChat({name: value}));
      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat({ name: chat.name }))}>X</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Create Chat</button>
      </form>
    </>
  );
};


