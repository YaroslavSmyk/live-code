
const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];


const changeTaskStatus = (event) => {
  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find((task) => task.id === taskId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

listElem.addEventListener("click", changeTaskStatus);

const createTasksHanler = () => {
  const inputElem = document.querySelector(".task-input");
  const newInput = inputElem.value;
  
  if (!newInput) {
    return;
  }
  tasks.push ({
    text: newInput;
    done: false;
    id: tasks.length + 1;

  });

  inputElem.value = "";
  renderTasks(tasks);
};

buttonELem.addEventListener("click", createTasksHanler);