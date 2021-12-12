import React from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Search, BarChart, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Busca = () => {
    const navigate  = useNavigate();

    function btnSearchClick(){
        navigate('/Repositorios');
    }

    function btnStatClick(){
        navigate('/Estatistica');
    }

    function btnLogoutClick(){
        navigate('/');
    }

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
                        <GrayButton id="btn_search" icon={<Search />} onClick={btnSearchClick}>Buscar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_stat" icon={<BarChart />} onClick={btnStatClick}>Estatística</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_logout" icon={<Logout />} onClick={btnLogoutClick}>Sair</GrayButton>
                    </Grid>
                </CenterGrid>
            </Grid>
        </CenterGrid>
    );
}