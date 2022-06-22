import { SnackbarProvider } from 'notistack';

import Routes from 'routes/routes';
import AppProvider from 'context/app/appProvider/appProvider';

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </SnackbarProvider>
  );
};

export default App;
