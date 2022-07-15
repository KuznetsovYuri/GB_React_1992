import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { Main } from '../../pages/Main';
import { ChatList } from '../Chats/ChatList/ChatList';
import { ChatPage } from '../../pages/Pages';
import { AboutWithConnect } from '../../pages/About';
import { Articles } from '../../pages/Articles';
import { SignIn } from '../../pages/SignIn';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';

const Profile = React.lazy(() =>
  Promise.all([
    import('../../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 2000)),

  ]).then(([moduleExports]) => moduleExports)

);

export const ChatWindow: FC = () => {

  return (

    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<PrivateRoute component={<Profile />} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="articles" element={<Articles />} />
        <Route path="about" element={<AboutWithConnect />} />
        <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
        <Route path="chats" element={<PrivateRoute />}>
          <Route
            index
            element={<ChatList />}
          />
          <Route
            path=":chatId"
            element={
              <ChatPage />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<h2>404 page</h2>} />
    </Routes>

  );
};