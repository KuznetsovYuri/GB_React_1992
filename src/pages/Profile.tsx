import { ThemeContext } from '../utils/ThemeContext';
import { FC, useContext, useState } from 'react';
import { changeName, toggleProfile } from '../store/profile/action';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';


export const Profile: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const visible = useSelector((state: StoreState) => state.profile.visible);
    const name = useSelector((state: StoreState) => state.profile.name);

    const dispatch = useDispatch();

    const [value, setValue] = useState('');



    return (
        <>
            <h2>Profile page</h2>
            <div>
                <p>{theme === 'light' ? '🌞' : '🌙'}</p>
                <button onClick={toggleTheme}>change theme</button>
            </div>
            <hr />
            <p>Profile name: {name}</p>
            <br />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {
                dispatch(changeName(value));
                setValue('');
            }}>change name</button>
            <br />
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => dispatch(toggleProfile())}>change visible</button>
        </>
    );

};


