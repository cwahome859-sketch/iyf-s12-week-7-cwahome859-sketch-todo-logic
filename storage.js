const STORAGE_KEY ="my-to-list";

export function saveTodos(todos) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(todos)
        );
    } catch (error) {
        console.error("could not save todos:", error);
    }    
}

export function loadTodos() {
    try {
        const savedTodos = localStorage.getItem(STORAGE_KEY);

        if (!savedTodos) {
            return[];
        }

        const todos=JSON.parse(savedTodos);

        return Array.isArray(todos) ? todos : [];

    } catch (error) {
        console.error("could not load todos:",error);
        return [];
    }
}