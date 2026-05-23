/*let addTask = document.getElementById("addTask");
let removeTask = document.getElementById("removeTask");
let currentIndex = 0;

addTask.addEventListener('click', function() {
    currentIndex++;
    
    // 1. Create the new input task element
    let newTask = document.createElement('input');
    newTask.id = `Task${currentIndex}`;
    newTask.style.textAlign="center"
    newTask.placeholder = "Type task & press Enter..."; // Helpful text!
    
    // 2. Add an event listener to the NEW task itself!
    newTask.addEventListener('keypress', function(event) {
        // Check if the user pressed the "Enter" key
        if (event.key === 'Enter') {
            // Find the finished board
            let finishedBoard = document.getElementById("finishedBoard");
            
            // THE TELEPORTATION SPELL! 
            // This moves the task completely from TO DO over to FINISHED!
            finishedBoard.appendChild(newTask);
            
            // Optional: Make it read-only so they can't change it once it's finished
            newTask.readOnly = true; 
        }
    });

    // 3. Drop it into the TO DO board first
    document.getElementById("todoBoard").appendChild(newTask);
    console.log("Added task index:", currentIndex);
});

removeTask.addEventListener('click', function() {
     if (currentIndex > 0) {
        document.getElementById(`Task${currentIndex}`).remove();
        currentIndex--;
        console.log("Removed task index:", currentIndex);
     } else {
        return;
     }
});*/
let addTask = document.getElementById("addTask");
let currentIndex = 0;

addTask.addEventListener('click', function() {
    currentIndex++;

    // 1. Create a container box for this specific task row
    let taskWrapper = document.createElement('div');
    taskWrapper.className = "task-row";
    taskWrapper.id = `TaskWrapper${currentIndex}`;

    // 2. Create the task input box
    let newTask = document.createElement('input');
    newTask.type = "text";
    newTask.placeholder = "Type task & press Enter...";
    newTask.style.width="90%"
    newTask.style.textAlign="center";
    // Add the teleportation spell you built earlier
    newTask.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let finishedBoard = document.getElementById("finishedBoard");
            finishedBoard.appendChild(taskWrapper); // Teleports the whole wrapper!
            newTask.readOnly = true;
        }
    });

    // 3. Create the individual delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "✕"; // A clean "X" symbol
    deleteBtn.className = "task-delete-btn";

    // THE DELETE LOGIC: When this specific button is clicked, 
    // it deletes its own parent wrapper box entirely!
    deleteBtn.addEventListener('click', function() {
        taskWrapper.remove();
    });

    // 4. Assemble the parts inside the wrapper box
    taskWrapper.appendChild(deleteBtn);
    taskWrapper.appendChild(newTask);
    // 5. Drop the whole completed wrapper into the TO DO column
    document.getElementById("todoBoard").appendChild(taskWrapper);
});