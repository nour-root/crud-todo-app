import ENDPOINTS from "../helper/ENDPOINTS";

const createTodo = (title, body, priority) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("body", body);
  formData.append("priority", priority);

  return fetch(`${import.meta.env.VITE_BASE_URL}${ENDPOINTS.CREATE_TODOS}`, {
    method: "POST",
    body: formData,
  });
};
export default createTodo;
