import { FC } from 'react';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList';
import { ChatList } from '../components/Chats/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

export const ChatPage: FC = () => {
  const { chatId } = useParams();

  const messages = useSelector((state: StoreState) => state.messages);

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
  //   ) {
  //     const timeout = setTimeout(() => {
  //       onAddMessage(chatId, {
  //         author: AUTHOR.bot,
  //         text: 'Im BOT',
  //       });
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [chatId, messages]);

  // const handleAddMessage = useCallback(
  //   (message: Message) => {
  //     if (chatId) {
  //       onAddMessage(chatId, message);
  //     }
  //   },
  //   [chatId, onAddMessage]
  // );

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList />
      <MessageList messages={chatId ? messages[chatId] : []}/>
      <Form />
    </>
  );
};