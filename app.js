
import {
    todos,
    currentFilter,
    setTodos,
    setFilter
} from "./state.js";


import {
    loadTodos,
    saveTodos
} from "./storage.js";


import {
    addTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted
} from "./todo-logic.js";


import { renderTodos } from "./ui.js";


const todoForm = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo-input");

const errorMessage = document.querySelector("#error-message");

const todoList = document.querySelector("#todo-list");

const clearButton = document.querySelector("#clear-completed");

const filterButtons = document.querySelectorAll("[data-filter]");


function updateApp() {

    saveTodos(todos);

    renderTodos(todos, currentFilter);

}


setTodos(loadTodos());

updateApp();


todoForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = todoInput.value.trim();

    if (!text) {

        errorMessage.textContent = "Please enter a task.";

        return;

    }

    errorMessage.textContent = "";

    const id = Date.now();

    setTodos(addTodo(todos, text, id));

    todoInput.value = "";

    updateApp();

});


todoList.addEventListener("click", function(event) {

    const button = event.target.closest('[data-action="delete"]');

    if (!button) return;

    const id = Number(button.dataset.id);

    setTodos(deleteTodo(todos, id));

    updateApp();

});


todoList.addEventListener("change", function(event) {

    if (event.target.dataset.action !== "toggle") return;

    const id = Number(event.target.dataset.id);

    setTodos(toggleTodo(todos, id));

    updateApp();

});




filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        setFilter(button.dataset.filter);

        renderTodos(todos, currentFilter);

    });

});


clearButton.addEventListener("click", function() {

    setTodos(clearCompleted(todos));

    updateApp();

});
