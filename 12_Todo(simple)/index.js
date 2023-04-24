const button = document.querySelector("#msgButton");
const input = document.querySelector("#msgInput");
const todoList = document.querySelector("#todoList");

button.addEventListener("click", onBtnClick);

function onBtnClick () {
    if (isStringValid(input.value)) {
        const li = document.createElement("li");
        li.textContent = input.value;
        todoList.append(li);
    }
    input.value = "";
}

function isStringValid (str) {
   return str.trim().length !== 0;
}