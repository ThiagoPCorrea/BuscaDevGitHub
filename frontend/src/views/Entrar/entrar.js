import React from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { PasswordInput, TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Login, PersonAdd } from '@mui/icons-material';
import './entrar.css'

export const Entrar = () => {
    const navigate = useNavigate();

    function btnLoginClick() {
        navigate("/Busca");
    }

    function btnCreateUserClick() {
        navigate("/Cadastro");
    }

    return (
        <CenterGrid direction='column' spacing={2} style={{ minHeight: '100vh' }}>
            <Grid item>
                <label>Busca de Usuarios do GitHub</label>
            </Grid>
            <Grid item>
                <TextInput id="lbl_email" label="Email" icon={<Email />} />
            </Grid>
            <Grid item>
                <PasswordInput id="lbl_password" label="Senha" />
            </Grid>
            <Grid item>
                <CenterGrid direction='row' spacing={2}>
                    <Grid item>
                        <GrayButton id="btn_login" icon={<Login />} onClick={btnLoginClick}>Logar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_newUser" icon={<PersonAdd />} onClick={btnCreateUserClick}>Novo Usuario</GrayButton>
                    </Grid>
                </CenterGrid>
            </Grid>
        </CenterGrid>
    );
}