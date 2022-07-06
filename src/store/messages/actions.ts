import { Dispatch } from 'redux';
import { Authors, Message } from '../../common-types';
import { AddChat, AddMessage, DeleteChat } from './types';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addChat: AddChat = (newChat) => ({
    type: ADD_CHAT,
    newChat,
});
export const deleteChat: DeleteChat = (chatName) => ({
    type: DELETE_CHAT,
    chatName,
});
export const addMessage: AddMessage = (chatName, message) => ({
    type: ADD_MESSAGE,
    chatName,
    message,

});

let timeout: NodeJS.Timeout;

export const addMessageWithReply = (chatName: string, message: Message) => (dispatch: Dispatch) => {
    dispatch(addMessage(chatName, message));

    if (message.author !== Authors.BOT) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => dispatch(addMessage(chatName, {
            author: Authors.BOT,
            text: 'Im bot'
        })), 1000);
    }
};

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