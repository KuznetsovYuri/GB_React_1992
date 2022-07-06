import React, { FC, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { ChatWindow } from './components/Chats/ChatWindow';
import { persistor, store } from './store/index';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { PersistGate } from 'redux-persist/integration/react';



export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeContext.Provider value={{
          theme,
          toggleTheme,
        }}>
          <ChatWindow />
        </ThemeContext.Provider>
      </Suspense>
      </PersistGate>
    </Provider>
  );
};

