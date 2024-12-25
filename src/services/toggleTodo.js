import ENDPOINTS from "../helper/ENDPOINTS";

const toggleTodo = (id, isChecked) => {
	return fetch(
		`${import.meta.env.VITE_BASE_URL}${ENDPOINTS.TOGGLE_FINISHED_TODOS(
			id
		)}?isFinished=${isChecked}`,
		{
			method: "PATCH",
		}
	);
};

export default toggleTodo;
