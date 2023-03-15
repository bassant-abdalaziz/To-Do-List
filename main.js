let inputText = document.querySelector(".text");
let btnAdd = document.querySelector(".add");
let divTasks = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Add Task
btnAdd.onclick = function () {
    if (inputText.value !== "") {
        addTaskToArray(inputText.value); // Add Task To Array Of Tasks
        inputText.value = ""; // Empty Input Field
    }
    showTask()
};


function addTaskToArray(taskText) {
    // Task Data
    const task = {
        title: taskText,
    };

    // Push Task To Array Of Tasks
    arrayOfTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}


// Show Tasks
function showTask() {
    let data = ''
    for (let i = 0; i < arrayOfTasks.length; i++) {
        data += `
        <div class="task">${arrayOfTasks[i].title}  <button onclick=deleteTask(${i})><i class="fa-solid fa-xmark"></i></button></div>
        `
    }
    divTasks.innerHTML = data
}

showTask()

//Delete Task
function deleteTask(i) {
    arrayOfTasks.splice(i, 1)
    localStorage.tasks = JSON.stringify(arrayOfTasks)
    showTask()
}

