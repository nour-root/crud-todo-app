const ENDPOINTS = {
	GET_ALL_TODOS: "todo",
	CREATE_TODOS: "todo",
	UPDATE_TODOS: (id) => `todo/${id}`,
	DELETE_TODOS: (id) => `todo/${id}`,
	TOGGLE_FINISHED_TODOS: (id) => `todo/${id}`,
};

export default ENDPOINTS;
