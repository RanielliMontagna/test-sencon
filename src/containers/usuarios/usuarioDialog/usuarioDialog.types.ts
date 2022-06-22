import type { IUsuarioTratado } from '../usuarios.types';

export interface IUsuarioDialogState {
  open: boolean;
  usuario?: IUsuarioTratado & { index: number };
}

export interface IUsuarioDialog extends IUsuarioDialogState {
  handleClose: () => void;
}
