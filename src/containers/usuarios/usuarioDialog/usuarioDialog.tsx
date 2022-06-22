import type { IUsuarioDialog } from './usuarioDialog.types';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

const UsuarioDialog = ({ open, handleClose, usuario }: IUsuarioDialog) => {
  const _montarLinha = (titulo: string, valor?: any) => {
    return (
      <li>
        <b>{titulo}: </b>
        {valor}
      </li>
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
      <DialogTitle id='responsive-dialog-title' style={{ fontWeight: 'bold' }}>
        Informações do usuário
      </DialogTitle>
      <DialogContent>
        <ul style={{ listStyle: 'none' }}>
          {_montarLinha('Indíce', usuario?.index)}
          {_montarLinha('Id', usuario?.id)}
          {_montarLinha('Username', usuario?.nome)}
          {_montarLinha('Email', usuario?.email)}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={handleClose}>
          Voltar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UsuarioDialog;
