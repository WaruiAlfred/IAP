document.addEventListener("DOMContentLoaded", function () {
  // Query DOM elements
  const submit = document.getElementById("submit");
  const newTask = document.getElementById("task");
  const taskList = document.getElementById("tasks");
  const taskForm = document.querySelector("form");

  // Disable submit button by default
  submit.disabled = true;

  let inputTask = "";

  newTask.addEventListener("input", function () {
    inputTask = this.value;
    if (inputTask !== "") {
      submit.disabled = false;
    }
  });

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = inputTask;
    taskList.appendChild(li);
    // Clear input field
    newTask.value = "";
    // Disable submit button
    submit.disabled = true;
    return false;
  });
});
