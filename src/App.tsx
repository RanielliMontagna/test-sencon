import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { SnackbarProvider } from 'notistack';

import Routes from 'routes/routes';
import AppProvider from 'context/app/appProvider/appProvider';

const App = () => {
  //Linka projeto com o Sentry para monitorar possíveis erros no código
  Sentry.init({
    dsn: 'https://fbe901cb1e4c47e4b182a314a002edf2@o1065447.ingest.sentry.io/6523657',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  return (
    <SnackbarProvider maxSnack={3}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </SnackbarProvider>
  );
};

export default App;
