const apiUrl = process.env.REACT_APP_API_URL;

// Endpoint para obter os usuários
export const getUsuarios = async () => {
  const response = await fetch(`${apiUrl}/users`);
  return response.json();
};
