import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { selectAuth } from '../store/profile/selectors';


export const nav = [
  {
    id: 1,
    name: 'Main',
    to: '/',
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile',
  },
  {
    id: 3,
    name: 'Chats',
    to: '/chats',
  },
  {
    id: 4,
    name: 'About',
    to: '/about',
  },
  {
    id: 5,
    name: 'Articles',
    to: '/articles',
  },
];

export const Header: FC = () => {
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signin', { replace: true });
  };
  const handleSignUp = () => {
    navigate('/signup', { replace: true });
  };
  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <>
      <header
        style={{
          backgroundColor: 'grey',
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {nav.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>{!isAuth && (
          <>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleSignUp}>Sign Up</button>
          </>
        )}
          {isAuth && (
            <>
              <button onClick={handleLogOut}>Logout</button>
            </>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};