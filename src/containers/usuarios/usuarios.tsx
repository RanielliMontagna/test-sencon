import * as styled from './usuario.styles';
import { colunasTabela } from './usuarios.static';

import { Header } from 'components';
import useUsuarios from './useUsuarios/useUsuarios';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import UsuarioDialog from './usuarioDialog/usuarioDialog';

const Usuarios = () => {
  const { usuarios, usuarioDialog, handleClickRow, handleOnCloseUsuarioDialog } = useUsuarios();

  return (
    <styled.DivGeral>
      <Header />
      <styled.DivTable>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {colunasTabela.map(column => (
                <TableCell key={column.key} style={{ fontWeight: 700 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios?.map(({ id, ...usuario }, index) => {
              return (
                <styled.TableRow key={String(id)} onClick={() => handleClickRow(index)}>
                  {colunasTabela.map(column => {
                    const value = usuario[column.key];

                    return (
                      <TableCell key={column.key} style={{ whiteSpace: 'nowrap' }}>
                        {value ?? '-'}
                      </TableCell>
                    );
                  })}
                </styled.TableRow>
              );
            })}
          </TableBody>
        </Table>
      </styled.DivTable>
      {usuarioDialog.open && (
        <UsuarioDialog
          open={usuarioDialog.open}
          usuario={usuarioDialog.usuario}
          handleClose={handleOnCloseUsuarioDialog}
        />
      )}
    </styled.DivGeral>
  );
};

export default Usuarios;
