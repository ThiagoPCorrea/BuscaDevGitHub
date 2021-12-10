import styled from 'styled-components';
import { Grid, Avatar, Typography, Button } from '@mui/material';

export const Container = styled(Grid)`
    ${({ theme }) => `
        background-color: ${theme.palette.gray.main};
    `}
`;

export const UserImage = styled(Avatar)`
    width:fit-content;
    height:fit-content;
`;

export const Text = styled(Typography)`
    word-break:break-all;
    .MuiTypography-root{
        line-height:1 !important;
    }    

    ${({ fontSize }) => `
    font-size: ${fontSize};
    `}

    ${({ display }) => `
    display: ${display};
    `}

    ${({ alignItems }) => `
    align-items: ${alignItems};
    `}

    ${({ theme }) => `
        color: ${theme.palette.gray.contrastText};
    `}
`;

export const WhiteButton = styled(Button)` 
    ${({ theme }) => `
        color: ${theme.palette.white.contrastText};
        background-color:  ${theme.palette.white.main};
    `}
`;

