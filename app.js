
// 1. Import state management functions
import {
    todos,
    currentFilter,
    setTodos,
    setFilter
} from "./state.js";

// 2. Import storage functions
import {
    loadTodos,
    saveTodos
} from "./storage.js";

// 3. Import task logic functions
import {
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted
} from "./todo-logic.js";

// 4. Import UI function
import { renderTodos } from "./ui.js";

// 5. Select HTML elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const errorMessage = document.querySelector("#form-error");
const todoList = document.querySelector("#todo-list");
const taskCount = document.querySelector("#task-count");
const clearButton = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll("[data-filter]");

// Check that required HTML elements exist
if (
    !todoForm ||
    !todoInput ||
    !errorMessage ||
    !todoList ||
    !taskCount ||
    !clearButton
) {
    throw new Error("Some required HTML elements are missing.");
}

// 6. Update and save the application
function updateApp() {
    saveTodos(todos);
    renderTodos(todos, currentFilter);
}

// 7. Load previously saved tasks
setTodos(loadTodos());

updateApp();

// 8. Add a new task
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = todoInput.value.trim();

    // Validate input
    if (text === "") {
        errorMessage.textContent = "Please enter a task.";
        todoInput.focus();
        return;
    }

    errorMessage.textContent = "";

    // Generate a unique task ID
    let id = Date.now();

    while (todos.some(todo => todo.id === id)) {
        id++;
    }

    // Add the task
    setTodos(addTodo(todos, text, id));

    // Clear input
    todoInput.value = "";

    // Update application
    updateApp();

    todoInput.focus();
});

// 9. Delete a task
todoList.addEventListener("click", function (event) {
    const deleteButton = event.target.closest(
        '[data-action="delete"]'
    );

    if (!deleteButton) {
        return;
    }

    const id = Number(deleteButton.dataset.id);

    setTodos(deleteTodo(todos, id));

    updateApp();
});

// 10. Mark a task as completed or active
todoList.addEventListener("change", function (event) {
    if (event.target.dataset.action !== "toggle") {
        return;
    }

    const id = Number(event.target.dataset.id);

    setTodos(toggleTodo(todos, id));

    updateApp();
});

// 11. Filter tasks
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        setFilter(button.dataset.filter);

        renderTodos(todos, currentFilter);
    });
});

// 12. Clear completed tasks
clearButton.addEventListener("click", function () {
    setTodos(clearCompleted(todos));

    updateApp();
});
