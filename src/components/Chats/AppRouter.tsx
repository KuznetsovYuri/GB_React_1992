import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Main } from '../../pages/Main';
import { ChatList } from './ChatList/ChatList';
import { ChatPage } from '../../pages/ChatPage/ChatPage';
import { AboutWithConnect } from '../../pages/About';
import { Articles } from '../../pages/Articles';
import { SignIn } from '../../pages/SignIn';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import { SignUp } from '../../pages/SignUp';
import { changeAuth } from '../../store/profile/slice';
import { useDispatch } from 'react-redux';
import { firebaseAuth, messagesRef } from '../../services/firebase';
import { Profile } from '../../pages/Profile';
import { onValue } from 'firebase/database';

// const Profile = React.lazy(() =>
//   Promise.all([
//     import('../../pages/Profile').then(({ Profile }) => ({
//       default: Profile,
//     })),
//     new Promise((resolve) => setTimeout(resolve, 2000)),

//   ]).then(([moduleExports]) => moduleExports)

// );

export const AppRouter: FC = () => {

  const dispatch = useDispatch();

  const [chats, setChats] = useState<any[]>([]);
  const [messagesDB, setMessagesDB] = useState<any>({});

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();

      const newChats = Object.entries(data).map((item: any) => ({
        id: item[0],
        name: item[1].name,
      }));

      setChats(newChats);
      setMessagesDB(data);
    });

    return unsubscribe;
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<PrivateRoute component={<Profile />} />} />
        <Route path="articles" element={<Articles />} />
        <Route path="about" element={<AboutWithConnect />} />
        <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="chats" element={<PrivateRoute />}>
          <Route
            index
            element={<ChatList chats={chats} messagesDB={messagesDB} />}
          />
          <Route
            path=":chatId"
            element={
              <ChatPage chats={chats} messagesDB={messagesDB} />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<h2>404 page not found</h2>} />
    </Routes>
  );
};
