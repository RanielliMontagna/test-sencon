import { VariantType } from "notistack";
import { Dispatch, SetStateAction } from "react";

export type IToggleSnackbar = {
  mensagem: string;
  variante?: VariantType;
};

export type ILoading = boolean;

export interface IAppContext {
  toggleSnackbar: (props: IToggleSnackbar) => void;
  setLoading: Dispatch<SetStateAction<ILoading>>;
}
