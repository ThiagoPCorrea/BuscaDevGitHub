import React from "react";
import { Grid, List } from '@mui/material';
import { RepositoryItem } from '../../components/listItems/listItems'
import { UserMenu } from '../../components/sideMenus/sideMenus'

export const Repositorios = () => {
    return (
        <Grid container direction='row' justifyContent="flex-start" alignItems="stretch" >
            <Grid item xs={4}>
                <UserMenu/>
            </Grid>
            <Grid item xs={8}>
                <List>
                    <RepositoryItem>

                    </RepositoryItem>
                </List>
            </Grid>
        </Grid>
    );
}