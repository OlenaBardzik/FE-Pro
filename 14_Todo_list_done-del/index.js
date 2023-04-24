"use strict";

const COLOR_DEFAULT = "black";
const COLOR_DONE = "green";
const CLASS_TODO_ITEM = "todoItem";
const CLASS_DELETE_BTN = "deleteBtn";
const CLASS_TODO_CONTENT = "todoContent"
const SELECTOR_ADD_BUTTON = "#addButton";
const SELECTOR_TODO_INPUT = "#todoInput";
const SELECTOR_TODO_LIST = "#todoList";

const addButton = document.querySelector(SELECTOR_ADD_BUTTON);
const todoInput = document.querySelector(SELECTOR_TODO_INPUT);
const todoList = document.querySelector(SELECTOR_TODO_LIST);

addButton.addEventListener("click", onAddBtnClick);
todoList.addEventListener("click", onTodoListClick);


function onAddBtnClick () {
    const todoData = getTodoData();
   
    if (isStringValid(todoData.todo)) {
        renderTodoData(todoData);
    } else {
        showError();
    }

    clearTodoData();
}

function onTodoListClick (event) {
    const target = event.target;
    const element = findElement(target);

    if (target.classList.contains(CLASS_DELETE_BTN)) {
        element.remove();
    }

    if (target.classList.contains(CLASS_TODO_CONTENT)) {
        setElementColor(element);
    } 
}


function getTodoData () {
    return {
        todo: todoInput.value,
    }
}

function isStringValid (str) {
   return str.trim().length !== 0;
}

function showError () {
    alert('The data is not valid');
}

function renderTodoData (todoData) {
    const template = `
        <li class="${CLASS_TODO_ITEM}">
            <span class="${CLASS_TODO_CONTENT}">${todoData.todo}</span>
            <button class="${CLASS_DELETE_BTN}">Delete</button>
        </li>
    `;

    todoList.insertAdjacentHTML("beforeend", template);
}

function clearTodoData () {
    todoInput.value = "";
}


function findElement (el) {
    return el.closest(`.${CLASS_TODO_ITEM}`);
}

function setElementColor (element) {
    if (element.style.color === COLOR_DONE) {
        element.style.color = COLOR_DEFAULT;
    } else {
        element.style.color = COLOR_DONE;
    }
}