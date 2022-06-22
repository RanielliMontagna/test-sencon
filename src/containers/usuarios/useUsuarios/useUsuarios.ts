import { useCallback, useEffect, useState } from 'react';

import type { IUsuario, IUsuarioTratado } from '../usuarios.types';
import type { IUsuarioDialogState } from '../usuarioDialog/usuarioDialog.types';

import { getUsuarios } from 'api';
import { useApp } from 'context/app';

const useUsuarios = () => {
  const [usuarios, _setUsuarios] = useState<IUsuarioTratado[]>([]);
  const [usuarioDialog, _setUsuarioDialog] = useState<IUsuarioDialogState>({ open: false });

  const { toggleSnackbar, setLoading } = useApp();

  const _logicaMostrarEmpresa = (i: number) => {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'TC / SENCON';
    } else if (i % 3 === 0) {
      return 'TC';
    } else if (i % 5 === 0) {
      return 'SENCON';
    }
    return 'Sem empresa';
  };

  // Busca os usuários
  const _buscarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await getUsuarios();
      if (response) {
        const usuariosTratados = response.map((usuario: IUsuario, index: number) => ({
          id: usuario.id,
          nome: usuario.name,
          email: usuario.email,
          telefone: usuario.phone,
          endereco: `${usuario.address.street}, ${usuario.address.suite}`,
          cidade: usuario.address.city,
          empresa: _logicaMostrarEmpresa(index),
        }));
        _setUsuarios(usuariosTratados);

        toggleSnackbar({
          mensagem: 'Listagem atualizada com sucesso!',
        });
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      toggleSnackbar({
        mensagem: err?.message ?? 'Erro ao buscar usuários!',
        variante: 'error',
      });
    }
  };

  useEffect(() => {
    _buscarUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lógicas sobre dialog de visualização de informações do usuário
  const handleClickRow = (index: number) => {
    _setUsuarioDialog({ open: true, usuario: { ...usuarios[index], index } });
  };

  const handleOnCloseUsuarioDialog = useCallback(() => {
    _setUsuarioDialog({ open: false });
  }, []);

  return {
    usuarios,
    handleClickRow,
    usuarioDialog,
    handleOnCloseUsuarioDialog,
  };
};

export default useUsuarios;
