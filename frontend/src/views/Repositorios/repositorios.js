import React, { useEffect, useState } from "react";
import { Container, Grid, List } from '@mui/material';
import { RepositoryItem } from '../../components/listItems/listItems'
import { UserMenu } from '../../components/sideMenus/sideMenus'
import { useNavigate, useLocation } from 'react-router-dom';

export const Repositorios = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    const data = useLocation();
    const requestOptions = {
        method: 'Get',
        headers: { 'Content-Type': 'application/json' }
    };
    let userData = {
        avatar: data.state?.dataGit?.avatar_url,
        bio: data.state?.dataGit?.bio,
        username: data.state?.dataGit?.login,
        name: data.state?.dataGit?.name,
        organization: data.state?.dataGit?.company,
        location: data.state?.dataGit?.location,
        email: data.state?.email,
        twitter: data.state?.dataGit?.twitter_username,
        followers: data.state?.dataGit?.followers,
        following: data.state?.dataGit?.following,
        blog: data.state?.dataGit?.blog
    };
    const [repoData, setRepoData] = useState([])
    const [starsData, setStarsData] = useState([])

    const fetchStars = () => {
        fetch(data.state?.dataGit?.starred_url.replace("{/owner}{/repo}", ""), requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        setStarsData(data.length);
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                console.log('Erro ao pegar numero de Estrelas do usuario: ' + error.message);
            });
    };

    const fetchRepos = () => {
        fetch(data.state?.dataGit?.repos_url, requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        setRepoData(data.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1))
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })
            .catch(function (error) {
                console.log('Erro ao pegar numero de Estrelas do usuario: ' + error.message);
            });
    };

    function btnBackClick() {
        navigate('/Busca');
    }

    useEffect(() => {
        if (token === 'null') {
            navigate('/')
        }
        fetchStars();
        fetchRepos();
        // eslint-disable-next-line
    }, []);

    return (
        <Container maxWidth={false} disableGutters style={{ padding: 0 }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    <UserMenu voltarClick={btnBackClick} dados={userData} stars={starsData} />
                </Grid>
                <Grid item xs={8} style={{ maxHeight: '100vh', overflow: 'auto' }}>
                    <List>
                        {repoData.map((data) => {
                            return <RepositoryItem dados={data} />
                        })}
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}