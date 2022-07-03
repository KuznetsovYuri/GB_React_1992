import { ListItem } from '@mui/material';
import { nanoid } from 'nanoid';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreState } from '../../../store';
import { addChat, deleteChat } from '../../../store/messages/actions';
import { selectChats } from '../../../store/messages/selectors';

export const ChatList: FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chats = useSelector(selectChats,
    (prev, next) => prev.length === next.length);

  useEffect(() => {
    console.log('chat changed')
  }, [chats])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      dispatch(addChat(value));
      

      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button>Create Chat</button>
      </form>
    </>
  );
};


