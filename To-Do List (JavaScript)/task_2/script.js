const inputField = document.getElementById("input-task");
const addTaskButtonEl = document.getElementById("add-task-button");
const myListEL = document.getElementById("task-list");

document.getElementById("new-task").addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = inputField.value.trim();
    if (taskText === '') {
        alert("Bitte gib eine Aufgabe ein.");
        return;
    }

    const neuesLi = document.createElement('li');

    neuesLi.innerHTML = `
        <input type="checkbox" class="check" />
        <span class="task">${taskText}</span>
        <button class="delete-btn"></button>
    `;

    neuesLi.querySelector(".delete-btn").addEventListener("click", function () {
       neuesLi.remove();
    });

    myListEL.appendChild(neuesLi);
    inputField.value = '';
});
