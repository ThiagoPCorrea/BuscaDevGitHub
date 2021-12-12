import React from "react";
import { Grid } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { PasswordInput, TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Email, Person } from '@mui/icons-material';
import { useNavigate  } from 'react-router-dom';
import { Check, ArrowBack } from '@mui/icons-material';
import { BackEndRoute } from '../../utils/Consts'
import './cadastro.css'

export const Cadastro = () => {
    const navigate  = useNavigate();

    function btnConfirmClick(){
        const requestOptions = {
            method: 'Get',
            headers: { 'Content-Type': 'application/json' },
            body: {}
        };

        fetch(BackEndRoute + '/create', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        if (data)
                            navigate("/Busca");
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                console.log('Erro ao buscar usuario: ' + error.message);
            });
    }

    function btnBackClick(){
        navigate('/');
    }

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
                        <GrayButton id="btn_confirm" icon={<Check />} onClick={btnConfirmClick}>Confirmar</GrayButton>
                    </Grid>
                    <Grid item>
                        <GrayButton id="btn_back" icon={<ArrowBack />} onClick={btnBackClick}>Voltar</GrayButton>
                    </Grid>
                </CenterGrid>
            </Grid>
        </CenterGrid>
    );
}