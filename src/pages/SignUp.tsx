import React, { useState } from 'react';
import { FC } from 'react';
import { signUp } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

export const SignUp: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            await signUp(email, password);
            navigate('/signin', { replace: true }); 
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <p>Логин:</p>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <p>Пароль:</p>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button>Sign Up</button>
            </form>
            {loading && <div>Loading</div>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </>
    );
};