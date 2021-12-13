import React, { useEffect,useState } from "react";
import { Grid, Container } from '@mui/material';
import { GrayButton } from '../../components/buttons/ContainedButtons'
import { TextInput } from '../../components/inputs/OutlinedInputs'
import { CenterGrid } from '../../components/grids/grids'
import { Search, BarChart, Logout } from '@mui/icons-material';
import { BackEndRoute } from '../../utils/Consts'
import { useNavigate } from 'react-router-dom';
import { DangerAlert } from '../../components/alerts/alerts'
import { trimEmailProvider } from '../../utils/Validation'

export const Busca = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const [username, setUsername] = useState('')
    const [warningState, setWarningState] = useState(false);
    const [textAlert, setTextAlert] = useState('')
    useEffect(() => {
        if (token === 'null') {
            navigate('/')
        }
        // eslint-disable-next-line
    }, []);

    function btnSearchClick() {
        let requestOptions = {
            method: 'Get',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('https://api.github.com/users/' + username, requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((dataGit) => {
                        if (dataGit.message) {
                            setTextAlert("Não foi possivel encontrar o usuario");
                            setWarningState(true);
                            return;
                        }

                        if (!dataGit.email) {
                            fetch('https://api.github.com/users/' + username + '/events/public', requestOptions)
                                .then((response) => {
                                    if (response.ok) {
                                        return response.json().then((dataEvents) => {
                                            let email = null;
                                            dataEvents.find((event) => {
                                                // eslint-disable-next-line
                                                return event.payload.commits.find((commit) => {
                                                    if (!trimEmailProvider(commit.author.email).includes("noreply")) {
                                                        email = commit.author.email;
                                                        return email;
                                                    }
                                                });
                                            });
                                            createStatistic(dataGit.login, trimEmailProvider(email));
                                            navigate('/Repositorios', { state: { dataGit: dataGit, email: email } });
                                        }).catch((err) => {
                                            console.log(err);
                                        })
                                    }
                                })
                                .catch(function (error) {
                                    console.log('Erro ao buscar usuario: ' + error.message);
                                });
                        } else {
                            createStatistic(dataGit.login, dataGit.email);
                            navigate('/Repositorios', { state: { dataGit: dataGit, email: dataGit.email } });
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                console.log('Erro ao buscar usuario: ' + error.message);
            });
    }

    function createStatistic(login, provider) {
        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:
                JSON.stringify({
                    loggedEmail: token,
                    username: login,
                    emailProvider: provider
                })
        };

        fetch('http://' + BackEndRoute + '/statistic/create', requestOptions)
            .then((response) => {
                return response.json().then((data) => {
                    return true;
                }).catch((err) => {
                    setTextAlert('Erro ao logar verifique se passou os dados corretos!')
                    setWarningState(true);
                    console.log(err);
                })
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
        <Container>
            <DangerAlert state={warningState} setState={setWarningState} text={textAlert} />
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
        </Container>
    );
}