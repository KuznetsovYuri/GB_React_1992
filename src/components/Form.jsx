import React, { useState } from 'react';
import { AUTHOR } from '../constants';
import style from './Form.module.scss';
import { Button } from './Button/Button';
import TextField from '@mui/material/TextField';



export const Form = ({ addMessage }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text,
        });
        setText('');
    };
    return (
        <form onSubmit={handleSubmit} className={style.form}>

            <TextField
                label={AUTHOR.user}
                placeholder="Text your message"
                multiline
                maxRows={4}
                autoFocus={true}
                sx={{ mr: 2, mb: 2, bgcolor: 'background.paper' }}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />

            <Button />


        </form>

    );

};