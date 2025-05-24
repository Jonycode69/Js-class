const tasks = [];
const allTasks = localStorage.getItem('tasks') 
? JSON.parse(localStorage.getItem('tasks')) 
: [];

console.log("🚀 ~ tasks:", tasks)
// target the html elements created
const textInput = document.getElementById('textInput');
const taskList = document.getElementById('taskList');
//write a function to add tasks
function addTask() {
    const taskInput = textInput.value.trim();
    if (taskInput === '') return;//will make sure the element is not empty

    const item = document.createElement('li');
    item.innerHTML = `
       <span>${taskInput}</span>
       <button onclick = "editTask(this)" class = "listBttn">Edit</button>
       <button onclick = "deleteTask(this)" class = "listBttn">Delete</button>
    `

    taskList.appendChild(item);
    tasks.push(item);
    allTasks.push(taskInput);
    saveTasks();
    textInput.value = '';
}
//function to edit
function editTask(button) {
   const listItem = button.parentElement;
   const listContent = listItem.querySelector('span')
   const newList = prompt("Edit task", listContent.innerText);
   if(newList !== null && newList.trim() !== '') {
    return listContent.innerText = newList;
   }else {
    alert('Task cannot be empty');
   }

   
}
//function to delete
function deleteTask(button) {
  const listItem = button.parentElement;
  listItem.remove();
  tasks.splice(tasks.indexOf(listItem), 1);
  allTasks.splice(allTasks.indexOf(listItem), 1);
  saveTasks();

// remove index of removed listItem  from allTasks array

console.log(button)

  
}
 //function to save item in a local storage
function saveTasks() {
localStorage.setItem('tasks', JSON.stringify(allTasks));
};

// display all tasks function 
function displayTasks() {
    taskList.innerHTML = '';
    allTasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button onclick = "editTask(this)" class = "listBttn">Edit</button>
            <button onclick = "deleteTask(this)" class = "listBttn">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

displayTasks();
