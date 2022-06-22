import { Header } from "components";
import useUsuarios from "./useUsuarios";

const Usuarios = () => {
  const { usuarios } = useUsuarios();
  //TODO: Implementar o componente de listagem de usuários
  return (
    <div>
      <Header />
    </div>
  );
};

export default Usuarios;
