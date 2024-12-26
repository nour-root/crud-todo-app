import ENDPOINTS from "../helper/ENDPOINTS";

const getAllTodos = () => {
  return fetch(`${import.meta.env.VITE_BASE_URL}${ENDPOINTS.GET_ALL_TODOS}`);
};

export default getAllTodos;
