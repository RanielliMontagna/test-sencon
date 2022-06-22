import { createContext } from 'react';
import type { IAppContext } from './appContext.types';

const AppContext = createContext({} as IAppContext);

export default AppContext;
