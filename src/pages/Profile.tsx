import { ThemeContext } from '../utils/ThemeContext';
import { FC, useContext } from 'react';
import { store } from '../store';

export const Profile: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { name, visible } = store.getState();
    

    return (
        <>
        <h2>Profile page</h2>
        <div>
            <p>{theme === 'light' ? '🌞' : '🌙'}</p>
            <button onClick={toggleTheme}>change theme</button>
        </div>
        <hr />
        <input type="checkbox" checked={visible} readOnly/>
        <button>change visible</button>
        </>
    );

    


};