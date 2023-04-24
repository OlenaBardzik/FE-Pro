class TodoListModel {
    
    #todos = [];

    getAll() {
        return TodoApi
            .getList()
            .then((list) => {
                this.#todos = list;
                return this.getList();
            })
    }

    create(todo) {
        return TodoApi
            .create({...todo, done: false})
            .then((createdTodo) => {
                this.addListItem(createdTodo);
                return createdTodo;
            })
    }

    update(todo) {
       return TodoApi
            .update(todo.id, todo)
            .then((updatedTodo) => {
                this.editListItem(updatedTodo);
                return updatedTodo;
            })
    }

    delete(id) {
        return TodoApi
            .delete(id)
            .then((deletedTodo) => {
                this.deleteListItem(id);
            })
    }

    getList() {
        return this.#todos;
    }

    getListItem(id) {
        return this.#todos.find(todo => todo.id === id);
    }

    addListItem(todo) {
        this.#todos.push(todo);
    }

    editListItem(todo) {
        this.#todos = this.#todos
            .map(todoItem => todoItem.id === todo.id ? todo : todoItem)
        }

    deleteListItem(id) {
        const index = this.#todos.indexOf(id);
        this.#todos.splice(index, 1);
    }
}