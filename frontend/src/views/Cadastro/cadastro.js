import React from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons.js'
import { PasswordInput, TextInput } from '../../components/inputs/OutlinedInputs.js'
import { CenterGrid } from '../../components/layouts/grids.js'
import { Email, Person } from '@mui/icons-material';
import './cadastro.css'

export const Cadastro = () => {
    return (
        <CenterGrid direction='column' spacing={2} style={{ minHeight: '100vh' }}>
            <Grid item>
                <label>Cadastro de Usuários</label>
            </Grid>
            <Grid item>
                <TextInput id="lbl_nome" label="Nome" icon={<Person />} />
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
                        <GrayButton id="btn_confirm">Confirmar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_back">Voltar</GrayButton>
                    </Grid>
                </CenterGrid>
            </Grid>
        </CenterGrid>
    );
}