import React, { useState } from 'react'
import { Container, List } from '@mui/material';
import Form from '../components/Form';
import ListItens from '../components/ListItens';


export default function Home() {

  const [itens, setItens] = useState([]);

  const itensHandler = (item) => {
    setItens([...itens, item])
  };

  const deleteItems = (id) => {
    let filtered = itens.filter((item) => item.id !== id)
    setItens(filtered);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '1em' }}>
      <Form itensHandler={itensHandler} />
      <List sx={{ bgcolor: 'background.paper', marginTop: '1em' }} >
        {itens.map((item) => (
          <ListItens key={item.id} item={item} qtd={item.qtd} deleteItems={deleteItems} />))}
      </List>
    </Container>
  )
}
