import React from "react";
import { Grid } from '@mui/material';

export const CenterGrid = ({children,direction,spacing,style}) =>{
    return (
        <Grid container spacing={spacing} direction={direction} alignItems='center' justifyContent='center' style={style}>
            {children}
        </Grid>
    );
}


export const HorizontalCenterGrid = ({children,direction,spacing,style}) =>{
    return (
        <Grid container spacing={spacing} direction={direction} style={style}>
            {children}
        </Grid>
    );
}