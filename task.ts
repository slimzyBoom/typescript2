interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

class TodoList {
  private todos: TodoItem[] = [];
  private idCounter: number = 1;

  addTodo(task: string): void {
    this.todos.push({
      id: this.idCounter++,
      task,
      completed: false,
    });
  }

  completeTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      console.error("Error: Todo item not found");
      return;
    }
    todo.completed = true;
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      console.error("Error: Todo item not found");
      return;
    }
    this.todos.splice(index, 1);
  }

  listTodos(): TodoItem[] {
    return this.todos;
  }

  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter((t) => t.completed === completed);
  }

  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      console.error("Error: Todo item not found");
      return;
    }
    todo.task = newTask;
  }

  clearCompletedTodos(): void {
    this.todos = this.todos.filter((t) => !t.completed);
  }
}

// Example Usage
const todoList = new TodoList();
todoList.addTodo("Learn TypeScript");
todoList.addTodo("Build a project");
console.log("All Todos:", todoList.listTodos());

todoList.completeTodo(1);
console.log("Completed Todos:", todoList.filterTodos(true));

todoList.updateTodo(2, "Build a Todo App");
console.log("Updated Todos:", todoList.listTodos());

todoList.clearCompletedTodos();
console.log("Remaining Todos:", todoList.listTodos());
