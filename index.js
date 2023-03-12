import "./todolist/todolist.js"

const doitclick = document.getElementById('doit');
doitclick.addEventListener('click',()=>check())

const todolistBtn = document.getElementById('to-do-btn')
todolistBtn.addEventListener('click', ()=>addItem())

const toDoList = document.getElementById('doit')





function addItem(){
    const inputValue = document.getElementById('create-to-do').value
    const toDoItem = document.createElement('to-do-item')
    toDoItem.setAttribute('task',inputValue)
    toDoList.append(toDoItem)
}