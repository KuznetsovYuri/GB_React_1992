import React, { FC, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { ChatWindow } from './components/Chats/ChatWindow';
import { store } from './store';
import { defaultContext, ThemeContext } from './utils/ThemeContext';



export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeContext.Provider value={{
        theme,
        toggleTheme,
      }}>
      <ChatWindow />
      </ThemeContext.Provider>
    </Suspense>
    </Provider>
  );
};

