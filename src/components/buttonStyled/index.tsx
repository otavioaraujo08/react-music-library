import { Button } from '@mui/material';
import styled from 'styled-components';

const ButtonWithStyle = styled(Button)`
    width: 15rem;
    height: 2.5rem;
    background: #cfaa4e !important;

    @media (max-width: 1200px) {
        width: 10rem;
        font-size: 0.8rem !important;
    }

    @media (max-width: 800px) {
        width: 8rem;
        font-size: 0.6rem !important;
    }
`;

interface ButtonProps {
    title: string;
    onClick: () => void;
    variantStyle?: 'text' | 'contained' | 'outlined';
}

const ButtonStyled = ({ title, onClick, variantStyle }: ButtonProps) => {
    return (
        <ButtonWithStyle
            onClick={onClick}
            variant={variantStyle || 'contained'}
        >
            {title}
        </ButtonWithStyle>
    );
};

export default ButtonStyled;
