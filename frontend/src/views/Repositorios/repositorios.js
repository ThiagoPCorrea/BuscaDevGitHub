import React, { useEffect, useState } from "react";
import { Container, Grid, List } from '@mui/material';
import { RepositoryItem } from '../../components/listItems/listItems'
import { UserMenu } from '../../components/sideMenus/sideMenus'
import { useNavigate, useLocation } from 'react-router-dom';

export const Repositorios = () => {
    const navigate = useNavigate();
    const data = useLocation();
    const requestOptions = {
        method: 'Get',
        headers: { 'Content-Type': 'application/json' }
    };
    let userData = {
        avatar: data.state.avatar_url,
        bio: data.state.bio,
        username: data.state.login,
        name: data.state.name,
        organization: data.state.company,
        location: data.state.location,
        email: data.state.email,
        twitter: data.state.twitter_username,
        followers: data.state.followers,
        following: data.state.following,
        blog: data.state.blog,
        stars: 0
    };
    const [repoData, setRepoData] = useState([])

    const fetchStars = () => {
        fetch(data.state.starred_url.replace("{/owner}{/repo}", ""), requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        userData.stars = data.reduce((accumulator, current) => accumulator + current.stargazers_count, 0);
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
        fetch(data.state.repos_url, requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json().then((data) => {
                        setRepoData(data.sort((a,b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1))
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
        fetchStars();
        fetchRepos();
    }, []);
    
    return (
        <Container maxWidth={false} disableGutters style={{ padding: 0 }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    <UserMenu voltarClick={btnBackClick} dados={userData} />
                </Grid>
                <Grid item xs={8} style={{maxHeight: '100vh', overflow: 'auto'}}>
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