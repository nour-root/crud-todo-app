import getTodayDate from "./getDate";

const createTaskItem = ({
	id = 0,
	title = "",
	body = "",
	priority = "",
	createdAt = "",
	isFinished = false,
}) => {
	const date = new Date(createdAt);

	const task = {
		id,
		title,
		priority,
		body,
		date: getTodayDate(date),
		complete: isFinished,
	};
	return task;
};
export default createTaskItem;
