"use strict";

const CLASS_TODO_ITEM = "todoItem";
const CLASS_TODO_ITEM_DONE = "done";
const CLASS_DELETE_BTN = "deleteBtn";
const CLASS_TODO_CONTENT = "todoContent"
const SELECTOR_ADD_BUTTON = "#addButton";
const SELECTOR_TODO_INPUT = "#todoInput";
const SELECTOR_TODO_LIST = "#todoList";

const addButton = document.querySelector(SELECTOR_ADD_BUTTON);
const todoInput = document.querySelector(SELECTOR_TODO_INPUT);
const todoList = document.querySelector(SELECTOR_TODO_LIST);

let todos = [];

window.addEventListener("load", onDocumentLoad);
addButton.addEventListener("click", onAddBtnClick);
todoList.addEventListener("click", onTodoListClick);



function onDocumentLoad() {
    TodoApi
        .getList()
        .then((list) => {
            todos = list;
            renderTodoList(list);
        })
        .catch((error) => {
            showError(error)
        })
}

function onAddBtnClick () {
    const todoData = getTodoData();
   
    if (isStringValid(todoData.title)) {
        createTodo(todoData);
    } else {
        showError();
    }

    clearTodoData();
}

function onTodoListClick (event) {
    const target = event.target;
    const element = findElement(target);

    if (target.classList.contains(CLASS_DELETE_BTN)) {
        deleteElement(element);
    }

    if (target.classList.contains(CLASS_TODO_CONTENT)) {
        updateElementStatus(element);
    } 
}


function renderTodoList(list) {
    const template = list.map(generateTodoHtml).join("");

    todoList.innerHTML = template;
}

function getTodoData () {
    return {
        title: todoInput.value,
        done: false,
        status: false
    }
}

function isStringValid (str) {
   return str.trim().length !== 0;
}

function createTodo (todo) {
    TodoApi.create(todo)
        .then((createdTodo) => {
            todos.push(createdTodo);
            renderTodoData(createdTodo);
        })
        .catch((error) => {
            showError(error)
        })

}

function showError (error) {
    alert(error.message);
}

function clearTodoData () {
    todoInput.value = "";
}

function renderTodoData (todoData) {
    const template = generateTodoHtml(todoData);

    todoList.insertAdjacentHTML("beforeend", template);
}

function generateTodoHtml(todoData) {
    return `
    <li id="${todoData.id}" class="${CLASS_TODO_ITEM}">
        <span class="${CLASS_TODO_CONTENT} ${todoData.done ? CLASS_TODO_ITEM_DONE : ''}">${todoData.title}</span>
        <button class="${CLASS_DELETE_BTN}">Delete</button>
    </li>
`;
}

function findElement (el) {
    return el.closest(`.${CLASS_TODO_ITEM}`);
}

function deleteElement(element) {
    TodoApi.delete(element.id)
        .then((deletedTodo) => {
            const index = todos.indexOf(deletedTodo);
            todos.splice(index, 1);
            element.remove();
        })
        .catch((error) => {
            showError(error)
        })
}

function updateElementStatus(element) {
    const todo = todos.find((item) => item.id === element.id);
    todo.done = !todo.done;
    TodoApi.update(todo.id, {done: todo.done})
        .then((updatedTodo) => {
            setElementActive(element);
        })
        .catch((error) => {
            showError(error)
        })
}

function setElementActive (element) {
    element.children[0].classList.toggle(CLASS_TODO_ITEM_DONE);
}