const todoCard = (task) => {
  return ` <div
            name="item"
            id="task-${task.id}"
          class="flex flex-col gap-[10px] border-[1px]  ${
            task.priority === "high"
              ? `border-red-500`
              : task.priority === "medium"
              ? `border-orange-500`
              : `border-green-500`
          } px-10 py-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="title flex justify-between items-center">
            <h3 class="capitalize text-sm font-bold">${task.title}</h3>
            <span class="text-slate-400 text-[12px]">${task.date}</span>
          </div>
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <input type="checkbox" ${
                  task.complete ? `checked` : ``
                } name="isFinish" id="checked-toggle" data-task="task-${
    task.id
  }" />
                <span class="${
                  task.priority === "high"
                    ? `text-red-500`
                    : task.priority === "medium"
                    ? `text-orange-500`
                    : `text-green-500`
                } -mt-1">${task.priority}</span>
              </div>
            </div>
            <div class="icons flex items-center gap-2">
              <button type="button" id="edit" data-id="${task.id}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#22c55e"
                    d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10l3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7L17 4.414L15.414 6L18 8.586z"
                  />
                </svg>
              </button>
              <button type="button" id="delete" data-id="${task.id}">
                <img src="/assets/delete.svg" />
              </button>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium">
              ${task.body}
            </p>
          </div>
        </div>`;
};
export default todoCard;
