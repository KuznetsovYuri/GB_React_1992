import React, { memo, FC, useState } from 'react';
import { AUTHOR } from '../../constants';
import { Button } from '../Button/Button';
import TextField from '@mui/material/TextField';
import { Message } from '../../common-types';


interface FormProps {
    addMessage: (msg: Message) => void
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text,
        });
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