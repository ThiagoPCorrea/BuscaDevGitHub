import React from "react";
import {Button} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {ButtonTheme} from '../../utils/Colors.js';

export const GrayButton = ({id,children,icon}) =>{
    return (
        <ThemeProvider theme={ButtonTheme}>
            <Button id={id} variant="contained" color="gray" startIcon={icon}>{children}</Button>
        </ThemeProvider>
    );
}