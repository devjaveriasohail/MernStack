// DOM ELement
const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector(".todos")
const totalTasks = document.querySelector("#total-tasks")
const completedTasks = document.querySelector("#completed-tasks")
const remainingTasks = document.querySelector("#remaining-tasks")
const mainInput = document.querySelector("#todo-form input")
//console.log(mainInput)
// console.log(todoForm,todoList,totalTasks,completedTasks,remainingTasks)

//local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || []
if (localStorage.getItem("tasks")) {
    tasks.map((task) => {
        createTask(task)
        // console.log("create task", createTask(task))
    })
}
// console.log("tasks", tasks)
// submit task
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
     const input=this.name;
    const inputValue = mainInput.value
    if (inputValue != "") {
        const task = {
            id: new Date().getTime(),
            name: inputValue,
            isCompleted: false
        }
   
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    //console.log("task",task)
    createTask(task);
     todoForm.reset()}
})

// count  task
function countTasks() {
   
    const completedTasksArray = tasks.filter((task) => task.isCompleted === true)
    totalTasks.textContent = tasks.length
    completedTasks.textContent = completedTasksArray.length
    remainingTasks.textContent = tasks.length - completedTasksArray.length
}
// create task
function createTask(task) {
const taskele = document.createElement('li')
taskele.setAttribute('id', task.id)

    if (task.isCompleted) {
        taskele.classList.add('complete')
    }
    const taskeleMarkup = `
    <div class=" m-3 d-flex flex-row p-2 justify-content-between align-items-center ">
    <div class="d-flex align-items-center ">
      <input type="checkbox" id="${task.name}-${task.id}" name="tasks" ${
    task.isCompleted ? "complete" : ""
  } class="mx-2 task_text" >
   <span ${!task.isCompleted ? "contenteditable" : ""} class="mx-2 task_text">${task.name}</span>
    </div>
    <button class="remove-task btn" title="Remove ${task.name} task">
    <img src="./img/remove task.png" class="remove-task"
    </button>
    <div>`
    taskele.innerHTML = taskeleMarkup
    todoList.appendChild(taskele)
    countTasks(task)
}

// remove task listener
todoList.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("remove-task") ||
        e.target.parentElement.classList.contains("remove-task")
    ) {
        const taskId = e.target.closest("li").id;
        removeTask(taskId);
    }
});
// remove function
function removeTask(taskId) {
    tasks = tasks.filter((task) => task.id !== parseInt(taskId))
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById(taskId).remove();
    countTasks();
    console.log("taskid", taskId)
}
// update task - change status or name
todoList.addEventListener("input", (e) => {
    const taskId = e.target.closest("li").id;
    updateTask(taskId, e.target);
  });

// update task
function updateTask(taskId, el) {
    const task = tasks.find((task) => task.id === parseInt(taskId))
// console.log("task",task)

    if (el.hasAttribute("contenteditable")) {
        task.name = el.textContent
        // console.log("task.name",task.name)
    }
    else {
        const span = el.nextElementSibling
        // console.log("span",span)
        const parent = el.closest("li")

        task.isCompleted = !task.isCompleted

        if (task.isCompleted) {
            span.removeAttribute("contenteditable")
            parent.classList.add("complete")
        }
        else {
            span.setAttribute("contenteditable", "true")
            parent.classList.remove("complete")
        }

  }

    localStorage.setItem("tasks", JSON.stringify(tasks))
    countTasks()
}