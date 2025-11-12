const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {
    if (taskInput.value === "") return alert("Enter a task!");

    let li = document.createElement("li");
    li.textContent = taskInput.value;
    li.onclick = toggleTask;

    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
}

function toggleTask() {
    this.classList.toggle("completed");
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
    Array.from(taskList.children).forEach(li => li.onclick = toggleTask);
}
git push -u origin main
