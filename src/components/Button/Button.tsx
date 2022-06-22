import { FC } from 'react';
import MUIButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface ButtonProps {
    label: string,
    disabled?: boolean,

}

export const Button: FC<ButtonProps> = ({ label, disabled = false }) => {
    return (
        <MUIButton
            disabled={disabled}
            data-testid="submitbutton"
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}>

        </MUIButton>
    );
};
