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
console.log("task",task)
})