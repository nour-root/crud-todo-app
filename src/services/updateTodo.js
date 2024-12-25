import ENDPOINTS from "../helper/ENDPOINTS";
const updateTodo = (id) => {
  return fetch(
    `${import.meta.env.VITE_BASE_URL}${ENDPOINTS.UPDATE_TODOS(id)}`,
    {
      method: "PUT",
    }
  );
};
export default updateTodo;
