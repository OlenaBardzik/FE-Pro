class TodoFormView {

    static SELECTOR_TODO_FORM = "todoForm";

    formElement = null;
    listeners = null;

    constructor() {
        this.formTemplate = this.generateFormHtml();
    }

    appendTo(element) {
        element.insertAdjacentHTML("beforeend", this.formTemplate);
    }

    bindListeners(listeners) {
        this.listeners = listeners;
        this.formElement = this.getFormElement();
        this.formElement.addEventListener('submit', this.onFormSubmit.bind(this))
    }

    onFormSubmit (e) {
        e.preventDefault();
    
        const data = this.getFormData();

        if (this.isTodoValid(data)) {
            this.listeners.onSubmit(data);
        } else {
            this.showError(new Error('Data is not valid'));
        }
      }

    generateFormHtml() {
        return `
        <form id="${TodoFormView.SELECTOR_TODO_FORM}">
            <input id="todoId" type="hidden"/>
            <input id="todoInput" type="text" placeholder="Enter Todo"/>
            <button id="addButton">Save</button>
        </form>
        `
    }

    getFormData () {
        this.formElement = this.getFormElement();
        const data = {
            title: this.formElement.todoInput.value,
        }
        if (this.isEditTodo()) {
            data.id = this.formElement.todoId.value;
        }
        return data;
    }

    isEditTodo() {
        return this.formElement.todoId.value.length > 0
    }

    setFormData (todo) {
        const form = this.getFormElement();
        form.todoInput.value = todo.title;
        form.todoId.value = todo.id;
    }

    clearFormData () {
        this.getFormElement().reset();
        this.getFormElement().todoId.value = '';
    }

    getFormElement() {
        if (this.formElement) {
            return this.formElement;
        }   
        return document.querySelector(`#${TodoFormView.SELECTOR_TODO_FORM}`); 
    }

    isTodoValid (todo) {
        return todo.title.trim().length !== 0;
    }

    showError (error) {
        alert(error.message);
    }
}