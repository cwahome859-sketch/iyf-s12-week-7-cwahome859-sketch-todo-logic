# Modular To-Do List Application

## Project Description

This project is a modular To-Do List application built using HTML, CSS, and JavaScript. It allows users to add, delete, complete, and manage daily tasks.

The application uses JavaScript ES modules to separate functionality into different files, making the code easier to understand, maintain, and test.

Vitest is used to perform unit testing on the application's pure JavaScript functions.

## Technologies Used

- HTML5 – Provides the application structure.
- CSS3 – Handles styling and responsive design.
- JavaScript (ES6+) – Implements application functionality.
- Node.js – Provides the JavaScript runtime.
- npm – Manages project dependencies.
- Vitest – Performs automated unit testing.
- Git and GitHub – Version control and project hosting.

## Project Structure

```text
todo-list/
│
├── index.html
├── style.css
├── package.json
├── package-lock.json
│
├── js/
│   ├── app.js
│   ├── state.js
│   ├── storage.js
│   ├── todo-logic.js
│   └── ui.js
│
└── tests/
    └── todo-logic.test.js
```

## Application Features

- Add new tasks.
- Delete existing tasks.
- Mark tasks as completed.
- Display all tasks.
- Filter tasks by completion status.
- Save tasks using localStorage.
- Organize JavaScript functionality into modules.
- Test application logic using Vitest.

## Running the Project

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Navigate into the project folder:

```bash
cd todo-list
```

3. Install dependencies:

```bash
npm install
```

4. Open `index.html` using VS Code Live Server.

## Running Vitest Tests

To run the tests:

```bash
npm test
```

To run tests once without watch mode:

```bash
npm run test:run
```

Vitest checks whether the application's functions produce the expected results.

## Challenges Faced

During the development and testing of this project, I encountered several challenges:

1. **JavaScript Module Management:** Separating the application into different JavaScript files and connecting them using import and export statements was challenging.

2. **DOM Manipulation:** Connecting JavaScript functions to HTML elements without creating errors required careful use of DOM selectors and event listeners.

3. **Local Storage:** Saving and retrieving tasks from localStorage required understanding JSON.stringify() and JSON.parse().

4. **Vitest Configuration:** Setting up Vitest and configuring the test environment to work with ES modules required additional practice.

5. **Writing Unit Tests:** Creating test cases for different functions and checking expected results was challenging.

6. **Debugging Errors:** Identifying syntax errors, incorrect imports, and function-related mistakes required testing and debugging.

## Lessons Learnt

Through this project, I gained practical experience in:

1. Understanding JavaScript ES modules and how to organize code.
2. Separating application logic from DOM manipulation.
3. Using import and export statements.
4. Working with localStorage to save application data.
5. Writing unit tests using Vitest.
6. Understanding the importance of automated testing.
7. Debugging JavaScript errors.
8. Managing dependencies using npm.
9. Using package.json and package-lock.json.
10. Organizing projects using a modular folder structure.

## Testing

The project uses Vitest to test pure functions in `todo-logic.js`.

The tests cover:

- Adding tasks.
- Deleting tasks.
- Updating task completion status.
- Filtering tasks.
- Checking expected function outputs.

## Future Improvements

- Add task editing functionality.
- Add task deadlines and priorities.
- Improve mobile responsiveness.
- Add task search functionality.
- Improve error handling.
- Add more unit tests for application functionality.

## Conclusion

Building this modular To-Do List application improved my understanding of JavaScript, ES modules, localStorage, and automated testing.

Using Vitest helped me understand how to test individual functions and identify errors before integrating them into the main application.

This project was an important step in improving my JavaScript development and software testing skills.

## Author

**Clement Wahome**

