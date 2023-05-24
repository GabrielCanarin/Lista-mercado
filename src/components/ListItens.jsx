import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Typography } from '@mui/material';

export default function ListItens({ item, deleteItems }) {

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="remove" onClick={() => deleteItems(item.id)}>
          <RemoveRoundedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {item.qtd}
            </React.Fragment>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
