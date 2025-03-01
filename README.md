# Todo List Application

This is a simple Todo List application implemented in TypeScript. It allows users to add, update, complete, filter, and remove tasks efficiently.

## Features

- Add new todo items
- Mark todos as completed
- Remove todo items
- List all todos
- Filter todos based on completion status
- Update existing todos
- Clear all completed todos

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed to run the application.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository/todo-list.git
   cd todo-list
   ```
2. Install dependencies (if applicable):
   ```sh
   npm install
   ```

### Usage

Run the application by creating an instance of the `TodoList` class and using its methods:

```typescript
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
```

## API Methods

### `addTodo(task: string): void`

Adds a new todo item to the list.

### `completeTodo(id: number): void`

Marks a specific todo item as completed.

### `removeTodo(id: number): void`

Removes a todo item by its ID.

### `listTodos(): TodoItem[]`

Returns all todo items.

### `filterTodos(completed: boolean): TodoItem[]`

Returns todos filtered by completion status.

### `updateTodo(id: number, newTask: string): void`

Updates a specific todo item with a new task description.

### `clearCompletedTodos(): void`

Removes all completed todos from the list.
