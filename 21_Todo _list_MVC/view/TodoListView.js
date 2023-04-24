class TodoListView {

    static CLASS_TODO_ITEM = "todoItem";
    static CLASS_TODO_ITEM_DONE = "done";
    static CLASS_DELETE_BTN = "deleteBtn";
    static CLASS_EDIT_BTN = "editBtn";
    static CLASS_TODO_CONTENT = "todoContent"

    static SELECTOR_TODO_LIST = "todoList";

    todoListEl = null;
    listeners = null;

    constructor() {
        this.todoListTemplate = this.generateTodoListHtml();
    }

    appendTo(element) {
        element.insertAdjacentHTML("beforeend", this.todoListTemplate);
    }

    bindListeners(listeners) {
        this.listeners = listeners;
        this.todoListEl = this.getTodoListEl();
        this.todoListEl.addEventListener("click", this.onTodoListClick.bind(this));
    }

    renderTodoList (list) {
        const html = list.map(this.generateTodoHtml).join('')
    
        this.getTodoListEl().innerHTML = html;
      }

    renderTodoData (todoData) {
        const template = this.generateTodoHtml(todoData);
    
        this.getTodoListEl().insertAdjacentHTML("beforeend", template);
    }

    generateTodoListHtml() {
        return `<ul id="${TodoListView.SELECTOR_TODO_LIST}"></ul>`;
    }

    generateTodoHtml(todoData) {
        return `
            <li id="${todoData.id}" class="${TodoListView.CLASS_TODO_ITEM}">
                <span class="${TodoListView.CLASS_TODO_CONTENT} ${todoData.done ? TodoListView.CLASS_TODO_ITEM_DONE : ''}">${todoData.title}</span>
                <button class="${TodoListView.CLASS_EDIT_BTN}">Edit</button>
                <button class="${TodoListView.CLASS_DELETE_BTN}">Delete</button>
            </li>
        `;
    }

    getTodoListEl() {
        if (this.todoListEl) {
            return this.todoListEl;
        }
        return document.querySelector(`#${TodoListView.SELECTOR_TODO_LIST}`);
    }

    findElement (el) {
        return el.closest(`.${TodoListView.CLASS_TODO_ITEM}`);
    }

    removeElement (id) {
        const element = document.querySelector(`[id="${id}"]`);
        if (element) {
            element.remove();
        }
    }

    replaceElement (todo) {
        const oldElement = document.querySelector(`[id="${todo.id}"]`);
        const newElement = this.generateTodoHtml(todo);
        oldElement.outerHTML = newElement;
    }

    onTodoListClick(e) {
        e.stopPropagation();
        const target = e.target;
    
        const element = this.findElement(target);
        
        switch (true) {
            case target.classList.contains(TodoListView.CLASS_DELETE_BTN):
                this.onDeleteBtnClick(element);
                break;
            case target.classList.contains(TodoListView.CLASS_EDIT_BTN):
                this.onEditBtnClick(element);
                break;
            case target.classList.contains(TodoListView.CLASS_TODO_CONTENT):
                this.onTodoElClick(element);
                break;
        }
    }

    onDeleteBtnClick(element) {
        this.listeners.onDelete(element.id);
    }
    
    onEditBtnClick(element) {
        this.listeners.onEdit(element.id);
    }
    
    onTodoElClick(element) {
        this.listeners.onToggle(element.id);
    }

    showError (error) {
        alert(error.message);
    }
}