import { FC } from 'react';
import MUIButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface ButtonProps {
    
    disabled?: boolean,
    click?: () => void;
    render?: () => JSX.Element;

}

export const Button: FC<ButtonProps> = ({ disabled = false, render, click, }) => {
    return (
        <MUIButton
            disabled={disabled}
            data-testid="submitbutton"
            variant="contained"
            type="submit"
            onClick={click}
            endIcon={<SendIcon />}>
            {render && render()}

        </MUIButton>
    );
};
