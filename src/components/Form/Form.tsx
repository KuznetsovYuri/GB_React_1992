import React, { memo, FC, useState } from 'react';
import { AUTHOR } from '../../constants';
import { Button } from '../Button/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/messages/actions';
import { useParams } from 'react-router-dom';

export const Form: FC = memo(() => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(chatId){
            dispatch(addMessage(chatId, text))
        }
        
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>

            <TextField
                label={AUTHOR.user}
                placeholder="Text your message"
                multiline
                maxRows={4}
                autoFocus={true}
                sx={{ mr: 2, mb: 2, bgcolor: 'background.paper' }}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                inputProps={{
                    'data-testid': 'input',
                }} />

            <Button render={() => <span>send</span>} />
        </form>

    );

}
);