import MUIButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const Button = ({ disabled = false, click = () => null }) => {
    return (
        <MUIButton
            disabled={disabled}
            onClick={click}
            data-testid="submitbutton"
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}>

        </MUIButton>
    );
};
