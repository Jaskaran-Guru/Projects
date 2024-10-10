const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

document.addEventListener("DOMContentLoaded", loadTasks);
taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = "";
    }
});

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
}

function addTask(taskText) {
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(task);
}

function renderTask(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-id", task.id);
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("click", toggleTask);

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.style.textDecoration = task.completed ? "line-through" : "none";

    const editButton = document.createElement("button");
    editButton.innerHTML = "✏️";
    editButton.addEventListener("click", editTask);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.addEventListener("click", deleteTask);

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
function toggleTask(e) {
    const taskId = e.target.closest("li").getAttribute("data-id");
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.map(task => {
        if (task.id == taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateTasks();
}

function updateTasks() {
    taskList.innerHTML = '';
    loadTasks();
}
function deleteTask(e) {
    const taskId = e.target.closest("li").getAttribute("data-id");
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter(task => task.id != taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateTasks();
}
function editTask(e) {
    const taskId = e.target.closest("li").getAttribute("data-id");
    const taskTextElement = e.target.previousElementSibling;
    const newText = prompt("Edit your task:", taskTextElement.textContent);
    
    if (newText !== null && newText.trim() !== "") {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks = tasks.map(task => {
            if (task.id == taskId) {
                task.text = newText;
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        updateTasks();
    }
}
