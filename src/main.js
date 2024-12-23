import "./style.css";

const form = document.getElementById("todo-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;
  const description = document.getElementById("description").value;
  console.log({ title, priority, description });
  form.reset();
});
