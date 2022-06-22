import { Loading } from "components";
import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";

const Usuarios = lazy(() => import("containers/usuarios/usuarios"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ReactRoutes>
          <Route path="/" element={<Usuarios />} />
          <Route path="*" element={<Navigate to="/" />} />
        </ReactRoutes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
