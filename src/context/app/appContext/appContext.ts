import { createContext } from "react";
import { IAppContext } from "./appContext.types";

const AppContext = createContext({} as IAppContext);

export default AppContext;
