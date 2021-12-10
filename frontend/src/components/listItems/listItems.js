import React from "react";
import { ListItem, ListItemText } from '@mui/material';
// import { StarOutline,  FiberManualRecord } from '@mui/icons-material/';
// import { InlineIconText } from '../texts/texts';

export const RepositoryItem = () => {
  return (
    <ListItem>
      <ListItemText
        primary="Repository Name"
        secondary={
            <React.Fragment>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat."}
            </React.Fragment>
        }
      />
    </ListItem>
  );
}