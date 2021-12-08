import React from "react";
import {  Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons.js'
import {PasswordInput,TextInput} from '../../components/inputs/OutlinedInputs.js'
import './login.css'

const Login = () => {
    return (
        <Grid container spacing={2} direction='column' alignItems='center' justifyContent='center' className='centerGrid'>
            <Grid item>
                <label>Busca de Usuarios do GitHub</label>
            </Grid>
            <Grid item>
                <TextInput id="lbl_email" label="Email" />
            </Grid>
            <Grid item>
                <PasswordInput id="lbl_password" label="Senha" />
            </Grid>
            <Grid item>
                <Grid container spacing={2} direction='row' alignItems='center' justifyContent='center'>
                    <Grid item>
                        <GrayButton id="btn_login">Logar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_newUser">Novo Usuario</GrayButton>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}

export { Login };