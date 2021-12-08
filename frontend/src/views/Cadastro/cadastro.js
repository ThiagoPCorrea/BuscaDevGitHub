import React from "react";
import {  Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons.js'
import {PasswordInput,TextInput} from '../../components/inputs/OutlinedInputs.js'
import './cadastro.css'

export const Cadastro = () => {
    return (
        <Grid container spacing={2} direction='column' alignItems='center' justifyContent='center' className='centerGrid'>
            <Grid item>
                <label>Cadastro de Usuários</label>
            </Grid>
            <Grid item>
                <TextInput id="lbl_nome" label="Nome" Icontype="USER"/>
            </Grid>
            <Grid item>
                <TextInput id="lbl_email" label="Email" Icontype="EMAIL" />
            </Grid>
            <Grid item>
                <PasswordInput id="lbl_password" label="Senha" />
            </Grid>
            <Grid item>
                <Grid container spacing={2} direction='row' alignItems='center' justifyContent='center'>
                    <Grid item>
                        <GrayButton id="btn_confirm">Confirmar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_back">Voltar</GrayButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}