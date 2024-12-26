import ENDPOINTS from "../helper/ENDPOINTS";
const updateTodo = (id, title, body, priority) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("body", body);
  formData.append("priority", priority);
  return fetch(
    `${import.meta.env.VITE_BASE_URL}${ENDPOINTS.UPDATE_TODOS(id)}`,
    {
      method: "PUT",
      body: formData,
    }
  );
};
export default updateTodo;
