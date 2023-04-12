// DOM ELement
const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector(".todos")
const totalTasks = document.querySelector("#total-tasks")
const completedTasks = document.querySelector("#completed-tasks")
const remainingTasks= document.querySelector("#remaining-tasks")
const mainInput=document.querySelector("#todo-form input")

//console.log(mainInput)
// console.log(todoForm,todoList,totalTasks,completedTasks,remainingTasks)

//local storage
let tasks= JSON.parse(localStorage.getItem("tasks")) || []

if (localStorage.getItem("tasks")){
    tasks.map((task)=>{
       console.log("create task",createTask(task))
    })
}
console.log("tasks",tasks)

todoForm.addEventListener('submit',(e)=>{
 e.preventDefault()

const inputValue=mainInput.value
if(inputValue==""){
    return
}
const task ={
    id: new Date().getTime(),
    name:inputValue,
    isCompleted:false
}
 tasks.push(task)
 localStorage.setItem("tasks",JSON.stringify(tasks))
//console.log("task",task)

todoForm.reset()
mainInput.focus()
})


function countTasks(){
    const completedTasksArray=tasks.filter((task)=>task.isCompleted=== true)
    totalTasks.textContent=tasks.length
    completedTasks.textContent=completedTasksArray.length
    remainingTasks.textContent=tasks.length-completedTasksArray.length
    }

function createTask(task){

    const taskele=document.createElement('li')
    taskele.setAttribute('id',task.id)

    if(task.isCompleted){
        taskele.classList.add('complete')
    }
const taskeleMarkup=`
<li class=" m-3 d-flex flex-row p-2  rounded justify-content-between align-items-center">
<div class="d-flex align-items-center ">
    <input type="checkbox" class="mx-2" name="tasks" id="${task.id}" ${task.isCompleted?'checked':""}>
    <span ${!task.isCompleted?'contenteditable':""} class="task_text p-2">${task.name}</span>
</div>
<button title="Remove ${task.name}" id="remove-task-${task.id}" class="remove-task btn">
    <img src="./img/remove task.png" class="remove-task">
</button>
</li>`
taskele.innerHTML=taskeleMarkup
todoList.appendChild(taskele)
countTasks(task)
}
todoList.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("remove-task") ||
      e.target.parentElement.classList.contains("remove-task")
    ) {
      const taskId = e.target.closest("li").id;
      removeTask(taskId);
    }
  });

function removeTask(taskId){
 tasks=tasks.filter((task)=>task.id !== parseInt(taskId))
 localStorage.setItem("tasks",JSON.stringify(tasks));
 document.getElementById(taskId).remove();
 countTasks();
 console.log("taskid",taskId)
}

// todoList.addEventListener('click',(e)=>{

//     if(e.target.classList.contains("remove-task")|| 
//     e.target.parentElement.classList.contains("remove-task")
//     ||e.target.parentElement.parentElement.classList.contains("remove-task")){
//         const taskId=e.target.closest('li').id
// removeTask(taskId)
//     console.log("taskid",e.target.classList.contains("remove-task"))
//     }
// })

todoList.addEventListener("input",(e)=>{
const taskId=e.target.closest("li").id
updateTask(taskId,e.target)
})

function updateTask(taskId,el){
    const task=tasks.find((task)=>task.id ===parseFloat(taskId))

    if(el.hasAttribute("contenteditable")) {
        task.name=el.textContent 
    }
    else {
        const span= el.nextElementSibling
        const parent =el.closest("li")

        task.isCompleted=!task.isCompleted

        if (task.isCompleted){
            span.removeAttribute("contenteditable")
            parent.classList.add("complete")
        }
        else {
            span.setAttribute("contenteditable","true")
            parent.classList.remove("complete")
        }
    }

    localStorage.setItem("tasks",JSON.stringify(tasks))
    countTasks()
}