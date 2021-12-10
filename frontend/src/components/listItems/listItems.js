import React from "react";
import { ListItem, ListItemText, Typography, Grid } from '@mui/material';
import { StarOutline, FiberManualRecord } from '@mui/icons-material/';
// import { InlineIconText } from '../texts/texts';

export const RepositoryItem = () => {
  return (
    <ListItem>
      <ListItemText
        primary="Repository Name"
        secondary={
          <React.Fragment>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat."}
            <Grid container direction='row' spacing={2}>
              <Grid item>
                <Typography display='inline-flex' alignitems='center'>
                  <StarOutline /> 100 stars
                </Typography>
              </Grid>
              <Grid item>
                <Typography display='inline-flex' alignitems='center'>
                  <FiberManualRecord /> Updated 30 days ago
                </Typography>
              </Grid>
            </Grid>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}