document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const completedTaskList = document.getElementById("completedTaskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            const currentTime = new Date();
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <span>Added: ${currentTime.toLocaleString()}</span>
                <button class="complete">Complete</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = "";

            const completeButton = taskItem.querySelector(".complete");
            completeButton.addEventListener("click", () => {
                const completedTime = new Date();
                taskItem.innerHTML = `
                    <span>${taskText}</span>
                    <span>Added: ${currentTime.toLocaleString()}</span>
                    <span>Completed: ${completedTime.toLocaleString()}</span>
                `;
                completedTaskList.appendChild(taskItem);
            });
        }
    });
});
