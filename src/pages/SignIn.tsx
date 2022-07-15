import React, { useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../store/profile/slice';

export const SignIn: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        if (login === 'gb' && password === 'gb') {
            dispatch(auth(true));
            navigate('/', { replace: true });
        } else {
            setError(true);
        }
    };

    return (
        <>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <p>Логин:</p>
                <input type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)} />
                <p>Пароль:</p>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button>LogIn</button>
            </form>
            {error && <p style={{ color: 'red' }}>Invalid login or password</p>}

        </>
    );
};