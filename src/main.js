import "./style.css";

// import helpers
import createTaskItem from "./helper/createTaskItem";

// import components
import loader from "./components/loader";
import todoCard from "./components/todo-card";

// import services
import getAllTodos from "./services/fetchTodos";
import deleteTodo from "./services/deleteTodo";
import toggleTodo from "./services/toggleTodo";
import createTodo from "./services/createTodo";
import updateTodo from "./services/updateTodo";
//
const form = document.getElementById("todo-form");
const container = document.getElementById("todos");
const btnClick = document.querySelector("#add");
//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const description = document.getElementById("description").value;
  //PUT
  if (btnClick.getAttribute("name") === "update") {
    const id = btnClick.getAttribute("id");
    updateTodo(id, title, description, priority)
      .then(() => {
        form.reset();
        main();
      })
      .catch();
    //POST
  } else if (btnClick.getAttribute("name") === "add") {
    createTodo(title, description, priority)
      .then(() => {
        form.reset();
        main();
      })
      .catch();
  }
});
const handleListener = () => {
  //delete
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
  //complete
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
  //upate
  const updateBtns = document.querySelectorAll("#edit");
  updateBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const dataset_Id = e.target.parentElement.dataset.id;
      btnClick.name = "update";
      btnClick.id = `${dataset_Id}`;
      btnClick.innerText = "Update";
      getAllTodos().then(async (t) => {
        let data = await t.json();
        data.forEach((task) => {
          if (parseInt(dataset_Id) === task.id) {
            document.getElementById("title").value = task.title;
            document.getElementById("priority").value = task.priority;
            document.getElementById("description").value = task.body;
          }
        });
      });
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
  btnClick.name = "add";
  btnClick.id = "add";
  btnClick.innerText = "Submit";
};

main();
