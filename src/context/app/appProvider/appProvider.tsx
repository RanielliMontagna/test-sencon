import { FC, memo, useState } from "react";

import { useSnackbar } from "notistack";
import { Loading } from "components";

import { ILoading, IToggleSnackbar } from "../appContext/appContext.types";
import AppContext from "../appContext/appContext";

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<ILoading>(false);
  const { enqueueSnackbar } = useSnackbar();

  const toggleSnackbar = ({ mensagem, variante }: IToggleSnackbar) => {
    enqueueSnackbar(mensagem, {
      variant: variante ?? "success",
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      autoHideDuration: 3000,
    });
  };

  return (
    <AppContext.Provider
      value={{
        toggleSnackbar,
        setLoading,
      }}
    >
      {loading && <Loading />}
      {children}
    </AppContext.Provider>
  );
};

export default memo(AppProvider);
