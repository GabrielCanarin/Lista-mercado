import React, { useState } from 'react';
import { TextField, Paper } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

export default function Form({ itensHandler }) {

  const [text, setText] = useState(null);
  const [qtd, setQtd] = useState(null);
  const [id, setId] = useState(0);

  const itensCreate = (text) => {
    const itensObj = { text: text, qtd: qtd, id: id };
    setId(id + 1);
    itensHandler(itensObj);
    document.getElementById('outlined-basic').value = null;
    document.getElementById('outlined-number').value = null;
  };


  return (
    <Paper style={{ padding: '1em' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-basic"
          label="Item" variant="outlined"
          fullWidth
          onChange={(e) => setText(e.target.value)} />
        <TextField
          id="outlined-number"
          label="Qtd"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '7em', margin: '0em 0em 0em 0.4em ' }}
          onChange={(e) => setQtd(e.target.value)}
        />
        <IconButton
          edge="end"
          aria-label="Remove"
          style={{ margin: '0.3em 0em 0.3em 0.2em' }}
          onClick={(e) => itensCreate(text)}>
          <ShoppingBasketRoundedIcon />
        </IconButton>
      </div>
    </Paper >
  )
}
