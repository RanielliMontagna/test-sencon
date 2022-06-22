import { useEffect, useState } from "react";
import { getUsuarios } from "api";
import { IUsuario } from "./usuarios.types";
import { useApp } from "context/app";

const useUsuarios = () => {
  const [usuarios, _setUsuarios] = useState<IUsuario[]>([]);
  const { toggleSnackbar, setLoading } = useApp();

  const _buscarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await getUsuarios();
      if (response) {
        _setUsuarios(response);
        toggleSnackbar({
          mensagem: "Listagem atualizada com sucesso!",
        });
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      toggleSnackbar({
        mensagem: err?.message ?? "Erro ao buscar usuários!",
        variante: "error",
      });
    }
  };

  useEffect(() => {
    _buscarUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    usuarios,
  };
};

export default useUsuarios;
