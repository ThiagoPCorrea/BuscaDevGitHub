import React from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Search, BarChart } from '@mui/icons-material';

export const Busca = () => {
    return (
        <CenterGrid direction='column' spacing={2} style={{ minHeight: '100vh' }}>
            <Grid item>
                <label>Busca de Usuarios do GitHub</label>
            </Grid>
            <Grid item>
                <CenterGrid direction='row' spacing={2}>
                    <Grid item>
                        <TextInput id="lbl_nome" label="Username" Icontype="USER" />
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_search" icon={<Search/>}>Buscar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_stat" icon={<BarChart/>}>Estatística</GrayButton>
                    </Grid>
                </CenterGrid>
            </Grid>
        </CenterGrid>
    );
}