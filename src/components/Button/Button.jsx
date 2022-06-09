import MUIButton from '@mui/material/Button';
export const Button = ({ label, disabled = false, click = () => null }) => {
    return (
        <MUIButton disabled={disabled} onClick={click} variant="contained" type="submit">
            {label}
        </MUIButton>
    );
};
