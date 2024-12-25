import ENDPOINTS from "../helper/ENDPOINTS";

const deleteTodo = (id) => {
	return fetch(
		`${import.meta.env.VITE_BASE_URL}${ENDPOINTS.DELETE_TODOS(id)}`,
		{
			method: "DELETE",
		}
	);
};

export default deleteTodo;
