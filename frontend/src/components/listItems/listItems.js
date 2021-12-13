import React from "react";
import { ListItem, ListItemText, Typography, Grid } from '@mui/material';
import { StarOutline, FiberManualRecord } from '@mui/icons-material/';
import moment from 'moment';
// import { InlineIconText } from '../texts/texts';

export const RepositoryItem = ({ dados }) => {
  function openRepository(){
    window.open(dados.html_url)
  }
  return (
    <ListItem>
      <ListItemText
        onClick={openRepository}
        primary={dados.name ? dados.name : "Repositorio sem nome"}
        secondary={
          <React.Fragment>
            {dados.description ? dados.description : "Repositorio sem descrição"}
            <Grid container direction='row' spacing={2}>
              <Grid item>
                <Typography display='inline-flex' alignitems='center'>
                  <StarOutline /> {dados.stargazers_count ? dados.stargazers_count : "0"} Stars
                </Typography>
              </Grid>
              <Grid item>
                <Typography display='inline-flex' alignitems='center'>
                  <FiberManualRecord /> {dados.updated_at ? "Atualizado " + moment(Date.now()).diff(new Date(dados.updated_at),'days') + " dias atrás" : "No Updates"}
                </Typography>
              </Grid>
            </Grid>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}