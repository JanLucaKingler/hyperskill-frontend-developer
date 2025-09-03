const inputField = document.getElementById("input-task");
const myListEL = document.getElementById("task-list");
const form = document.getElementById("new-task");

function createTaskElement(taskText) {
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="check" />
        <span class="task">${taskText}</span>
        <button class="delete-btn"></button>
    `;

    initializeTask(li);
    return li;
}

function initializeTask(liElement) {
    const checkbox = liElement.querySelector(".check");
    const deleteButton = liElement.querySelector(".delete-btn");

    if (checkbox) {
        checkbox.addEventListener("change", () => {
            liElement.classList.toggle("checked");
        });
    }

    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            liElement.remove();
        });
    }
}

function addNewTask(event) {
    event.preventDefault();

    const taskText = inputField.value.trim();
    if (taskText === "") {
        alert("Bitte gib eine Aufgabe ein.");
        return;
    }

    const newTask = createTaskElement(taskText);
    myListEL.appendChild(newTask);
    inputField.value = "";
}

function initializeExistingTasks() {
    const allTasks = document.querySelectorAll("#task-list li");
    allTasks.forEach(initializeTask);
}

function init() {
    initializeExistingTasks();
    form.addEventListener("submit", addNewTask);
}

init();
