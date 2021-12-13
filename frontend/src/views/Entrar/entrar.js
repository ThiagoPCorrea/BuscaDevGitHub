import React, { useState } from "react";
import { Grid, Container } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { PasswordInput, TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Login, PersonAdd } from '@mui/icons-material';
import { BackEndRoute } from '../../utils/Consts'
import { DangerAlert } from '../../components/alerts/alerts'
import { validateEmail } from '../../utils/Validation'
import './entrar.css'

export const Entrar = () => {
    const navigate = useNavigate();
    const [warningState, setWarningState] = useState(false);
    const [textAlert, setTextAlert] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState({
        password: '',
        showPassword: false,
    })

    sessionStorage.setItem('token', null);

    function btnLoginClick() {
        if (!email || !senha) {
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
                    password: senha.password
                })
        };

        fetch('http://' + BackEndRoute + '/login', requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        if (data){
                            sessionStorage.setItem('token', email);
                            navigate("/Busca");
                        }else{
                            setTextAlert('Erro ao logar verifique se passou os dados corretos!')
                            setWarningState(true);  
                        }
                    }).catch((err) => {
                        setTextAlert('Erro ao logar verifique se passou os dados corretos!')
                        setWarningState(true);
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                setTextAlert('Erro ao logar verifique se passou os dados corretos!')
                setWarningState(true);
                console.log('Erro ao logar: ' + error.message);
            });

    }

    function btnCreateUserClick() {
        navigate("/Cadastro");
    }

    return (
        <Container>
            <DangerAlert state={warningState} setState={setWarningState} text={textAlert} />
            <CenterGrid direction='column' spacing={2} style={{ minHeight: '100vh' }}>
                <Grid item>
                    <label>Busca de Usuarios do GitHub</label>
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
                            <GrayButton id="btn_login" icon={<Login />} onClick={btnLoginClick}>Logar</GrayButton>
                        </Grid>
                        <Grid item>
                            <GrayButton id="btn_newUser" icon={<PersonAdd />} onClick={btnCreateUserClick}>Novo Usuario</GrayButton>
                        </Grid>
                    </CenterGrid>
                </Grid>
            </CenterGrid>
        </Container>
    );
}