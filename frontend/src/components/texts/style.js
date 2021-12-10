import styled from 'styled-components';
import { Typography } from '@mui/material';

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