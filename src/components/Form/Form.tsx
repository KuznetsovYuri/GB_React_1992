import React, { memo, FC, useState } from 'react';
import { AUTHOR } from '../../constants';
import { Button } from '../Button/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../store/messages/actions';
import { useParams } from 'react-router-dom';
import { Authors } from '../../common-types';
import { ThunkDispatch } from 'redux-thunk';

export const Form: FC = memo(() => {
    const [text, setText] = useState('');

    const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
    const { chatId } = useParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            dispatch(addMessageWithReply(chatId, { author: Authors.USER, text }));
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