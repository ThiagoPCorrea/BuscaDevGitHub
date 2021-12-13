import React, { useState } from "react";
import { Grid, Container } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { PasswordInput, TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Email, Person, Check, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BackEndRoute } from '../../utils/Consts'
import { DangerAlert, SuccessAlert } from '../../components/alerts/alerts'
import { validateEmail } from '../../utils/Validation'
import './cadastro.css'

export const Cadastro = () => {
    const navigate = useNavigate();
    const [warningState, setWarningState] = useState(false);
    const [successState, setSuccessState] = useState(false);
    const [textAlert, setTextAlert] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState({
        password: '',
        showPassword: false,
      })

    function btnConfirmClick() {
        if (!nome || !email || !senha) {
            setTextAlert('Preencha todos os campos!');
            setWarningState(true);
            return;
        }

        if (!validateEmail(email)) {
            setTextAlert('Email inavalido');
            setWarningState(true);
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:
            JSON.stringify({
                email: email,
                name: nome,
                password: senha.password
            })
        };

        fetch('http://' + BackEndRoute + '/create', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        if (data) {
                            setTextAlert('Usuario criado com successo');
                            setSuccessState(true);
                        }

                    }).catch((err) => {
                        setTextAlert('Erro ao criar usuario')
                        setWarningState(true);
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                setTextAlert('Erro ao criar usuario')
                setWarningState(true);
                console.log('Erro ao criar usuario: ' + error.message);
            });
    }

    function btnBackClick() {
        navigate('/');
    }

    return (
        <Container>
            <DangerAlert state={warningState} setState={setWarningState} text={textAlert} />
            <SuccessAlert state={successState} setState={setSuccessState} text={textAlert} />
            <CenterGrid direction='column' spacing={2} style={{ minHeight: '100vh' }}>
                <Grid item>
                    <label>Cadastro de Usuários</label>
                </Grid>
                <Grid item>
                    <TextInput id="lbl_nome" label="Nome" icon={<Person />} onChange={event => setNome(event.target.value)} />
                </Grid>
                <Grid item>
                    <TextInput id="lbl_email" label="Email" icon={<Email />} onChange={event => setEmail(event.target.value)} />
                </Grid>
                <Grid item>
                    <PasswordInput id="lbl_password" label="Senha" values={senha} setValues={setSenha} />
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
        </Container>
    );
}