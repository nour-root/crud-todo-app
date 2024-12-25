import "./style.css";

// import helpers
import getTodayDate from "./helper/getDate";
import createTaskItem from "./helper/createTaskItem";

// import components
import loader from "./components/loader";
import todoCard from "./components/todo-card";

// import services
import getAllTodos from "./services/fetchTodos";
import deleteTodo from "./services/deleteTodo";
import toggleTodo from "./services/toggleTodo";

const container = document.getElementById("todos");

// const form = document.getElementById("todo-form");
// const arrItems = [];

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const title = document.getElementById("title").value;
// 	const priority = document.getElementById("priority").value;
// 	const description = document.getElementById("description").value;
// 	const item = document.createElement("div");
// 	const date = getTodayDate();
// 	item.id = `${arrItems.length}`;
// 	const task = createTaskItem(arrItems.length, title, priority, description, date);
// 	arrItems.push(task);

// 	item.innerHTML = todoCard(task);
// 	container.appendChild(item);
// 	form.reset();
// });

const handleListener = () => {
	const deleteBtns = document.querySelectorAll("#delete");
	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const datasetId = e.target.parentElement.dataset.id;
			const selectedItem = document.getElementById(`task-${datasetId}`);
			deleteTodo(datasetId)
				.then(() => {
					selectedItem.remove();
					main();
				})
				.catch(() => {});
		});
	});

	const checkBtns = document.querySelectorAll("#checked-toggle");
	checkBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const tempId = e.target.dataset.task.split("-")[1];
			const isChecked = e.target.checked;
			toggleTodo(tempId, isChecked)
				.then(() => {
					main();
				})
				.catch(() => {});
		});
	});
};

const main = () => {
	container.innerHTML = loader();
	getAllTodos()
		.then(async (res) => {
			const data = await res.json();
			const tempArray = [];
			container.innerHTML = "";
			if (data.length > 0) {
				data.forEach((task) => {
					const structuredData = createTaskItem(task);
					const itemComponent = todoCard(structuredData);
					tempArray.push(itemComponent);
				});
				container.innerHTML = tempArray.join("");
			}
			handleListener();
		})
		.catch(() => {});
};

main();
