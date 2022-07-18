import React, { FC, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/Chats/AppRouter';
import { store } from './store/index';
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
          
            <AppRouter />
          
        </ThemeContext.Provider>
      </Suspense>
    </Provider>
  );
};

