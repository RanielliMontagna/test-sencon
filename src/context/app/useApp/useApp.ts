import { useContext } from "react";
import AppContext from "../appContext/appContext";

const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp() deve estar dentro de um <AppProvider />");
  }

  return context;
};

export default useApp;
