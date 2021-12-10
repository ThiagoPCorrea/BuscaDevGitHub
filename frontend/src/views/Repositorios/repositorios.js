import React from "react";
import { Container, Grid, List} from '@mui/material';
import { RepositoryItem } from '../../components/listItems/listItems'
import { UserMenu } from '../../components/sideMenus/sideMenus'

export const Repositorios = () => {
    return (
        <Container maxWidth={false} disableGutters style={{ padding: 0 }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    <UserMenu />
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