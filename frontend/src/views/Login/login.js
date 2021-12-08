import React from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons.js'
import {PasswordInput,TextInput} from '../../components/inputs/OutlinedInputs.js'
import { CenterGrid } from '../../components/layouts/grids.js'
import { Email } from '@mui/icons-material';
import './login.css'

export const Login = () => {
    return (
        <CenterGrid direction='column' spacing={2} style={{ minHeight: '100vh' }}>
            <Grid item>
                <label>Busca de Usuarios do GitHub</label>
            </Grid>
            <Grid item>
                <TextInput id="lbl_email" label="Email" icon={<Email/>} />
            </Grid>
            <Grid item>
                <PasswordInput id="lbl_password" label="Senha" />
            </Grid>
            <Grid item>
                <CenterGrid direction='row' spacing={2}>
                    <Grid item>
                        <GrayButton id="btn_login">Logar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_newUser">Novo Usuario</GrayButton>
                    </Grid>
                </CenterGrid>
            </Grid>
        </CenterGrid>
    );
}