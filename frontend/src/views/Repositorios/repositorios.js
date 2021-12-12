import React from "react";
import { Container, Grid, List} from '@mui/material';
import { RepositoryItem } from '../../components/listItems/listItems'
import { UserMenu } from '../../components/sideMenus/sideMenus'
import { useNavigate  } from 'react-router-dom';

export const Repositorios = () => {
    const navigate  = useNavigate();
    function btnBackClick(){
        navigate('/Busca');
    }

    return (
        <Container maxWidth={false} disableGutters style={{ padding: 0 }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    <UserMenu voltarClick={btnBackClick} />
                </Grid>
                <Grid item xs={8}>
                    <List>
                        <RepositoryItem />
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}