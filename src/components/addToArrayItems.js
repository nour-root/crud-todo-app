const addToArray = (id, title, priority, description, date) => {
  const task = {
    id: `${id}`,
    title: `${title}`,
    priority: `${priority}`,
    description: `${description}`,
    history: `${date}`,
    complate: false,
  };
  return task;
};
export default addToArray;
