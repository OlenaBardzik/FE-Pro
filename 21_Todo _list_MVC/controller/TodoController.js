class TodoController {
    constructor(rootEl) {
        this.todoListModel = new TodoListModel();
        this.todoFormView = new TodoFormView();
        this.todoListView = new TodoListView();

        this.todoFormView.appendTo(rootEl);
        this.todoListView.appendTo(rootEl);

        this.todoFormView.bindListeners({ onSubmit: this.onFormSubmit.bind(this) });
        this.todoListView.bindListeners({
            onDelete: this.onDeleteTodo.bind(this),
            onEdit: this.onEditTodo.bind(this),
            onToggle: this.onToggleTodo.bind(this),
        });

        this.onInit();
    }

    onInit () {
        this.todoListModel.getAll()
            .then((list) => {
                this.todoListView.renderTodoList(list);
            })
            .catch((error) => {
                this.todoListView.showError(error);
            })
    }

    onFormSubmit (todo) {
        if (todo.id) {
            this.updateTodo(todo);
        } else {
            this.createTodo(todo);
        }  
    }

    createTodo(todo) {
        this.todoListModel.create(todo)
            .then((newTodo) => {
                this.todoListView.renderTodoData(newTodo);
                this.todoFormView.clearFormData();
            })
            .catch((error) => {
                this.todoListView.showError(error);
            })
    }

    updateTodo(todo) {
        this.todoListModel.update(todo)
            .then((updatedTodo) => {
                this.todoListView.replaceElement(updatedTodo);
                this.todoFormView.clearFormData();
            })
            .catch((error) => {
                this.todoListView.showError(error);
            })
    }

    onDeleteTodo (id) {
        this.todoListModel.delete(id)
            .then(() => {
                this.todoListView.removeElement(id);
            })
            .catch((error) => {
                this.todoListView.showError(error);
            })
    }

    onEditTodo (id) {
        const todo = this.todoListModel.getListItem(id);
        this.todoFormView.setFormData(todo);
    }

    onToggleTodo(id) {
        const todo = this.todoListModel.getListItem(id);
        todo.done = !todo.done;
        this.updateTodo(todo);
    }
}