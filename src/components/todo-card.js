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
              <button type="button" id="edit" data-id="${
								task.id
							}" data-title="${task.title}" data-priority="${
		task.priority
	}" data-body="${task.body}">
                <img src="/assets/edit.svg" alt="">
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
