import React, { useState } from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Search, BarChart, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Busca = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')

    function btnSearchClick() {
        const requestOptions = {
            method: 'Get',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('https://api.github.com/users/' + username, requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        navigate('/Repositorios', {state:data});
                    }).catch((err) => {
                        console.log(err);
                    }) 
                }
            })
            .catch(function (error) {
                console.log('Erro ao buscar usuario: ' + error.message);
            });
    }

    function btnStatClick() {
        navigate('/Estatistica');
    }

    function btnLogoutClick() {
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
                        <TextInput id="lbl_nome" label="Username" Icontype="USER" onChange={event => setUsername(event.target.value)} />
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