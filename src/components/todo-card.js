const todoCard = (task) => {
  return ` <div
            name="item"
            id="${task.id}"
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
            <span class="text-slate-400 text-[12px]">${task.history}</span>
          </div>
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <input type="checkbox" ${
                  task.complate ? `checked` : ``
                } name="isFinish" />
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
              <button type="submit" id="edit">
                <svg
                id="edit"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="fill-green-500"
                    d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10l3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7L17 4.414L15.414 6L18 8.586z"
                  />
                </svg>
              </button>
              <button type="submit" id="del" clsss="-mt-1">
                <svg
                id="del"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 56 56"
                >
                  <path
                    class="fill-red-600"
                    d="m44.524 48.66l1.617-34.265h2.343c.961 0 1.735-.797 1.735-1.758s-.774-1.782-1.735-1.782H38.242V7.34c0-3.352-2.273-5.531-5.882-5.531h-8.766c-3.61 0-5.86 2.18-5.86 5.53v3.516H7.54c-.937 0-1.758.82-1.758 1.782c0 .96.82 1.758 1.758 1.758h2.344L11.5 48.684c.164 3.375 2.39 5.507 5.766 5.507h21.492c3.351 0 5.601-2.156 5.765-5.53M21.484 7.574c0-1.336.985-2.273 2.391-2.273h8.227c1.43 0 2.414.937 2.414 2.273v3.281H21.484Zm-3.867 43.102c-1.36 0-2.367-1.032-2.437-2.39l-1.64-33.891h28.85l-1.546 33.89c-.07 1.383-1.055 2.39-2.438 2.39Zm17.344-4.125c.773 0 1.36-.633 1.383-1.524l.703-24.75c.023-.89-.586-1.547-1.383-1.547c-.726 0-1.336.68-1.36 1.524l-.702 24.773c-.024.844.562 1.524 1.359 1.524m-13.898 0c.797 0 1.382-.68 1.359-1.524l-.703-24.773c-.024-.844-.656-1.524-1.383-1.524c-.797 0-1.383.657-1.36 1.547l.727 24.75c.024.891.586 1.524 1.36 1.524m8.367-1.524V20.254c0-.844-.633-1.524-1.407-1.524c-.773 0-1.43.68-1.43 1.524v24.773c0 .844.657 1.524 1.43 1.524c.75 0 1.407-.68 1.407-1.524"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium">
              ${task.description}
            </p>
          </div>
        </div>`;
};
export default todoCard;
