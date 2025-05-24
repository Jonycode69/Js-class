// variables to store the DOM elements
const todoInput = document.getElementById("todo-input"); // get the input element
const addTodoButton = document.getElementById("add-todo"); // get the button element
const todoList = document.getElementById("todo-list"); // get the ul element
const searchInput = document.getElementById("search"); // get the input element for search

const todo = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : []; // array to store the todo items

console.log(todo);


//CRUD

// CREATE function to add a todo item
function addTodo() {
  const todoItem = todoInput.value; // get the value of the input element
  todo.push(todoItem); // add the todo item to the array
  todoInput.value = ""; // clear the input element
  displayTodo(); // display the todo items on the page
  saveTodo(); // save the todo items to local storage
}

// READ function to display the todo items
function displayTodo() {
  todoList.innerHTML = ""; // clear the ul element

  todo.forEach((item, index) => {
    const todoItem = document.createElement("li"); // create a li element
    todoItem.innerHTML = `${item} 
    <button onclick="editTodo(${index})">Edit</button> 
    <button onclick="removeTodo(${index})">Remove</button>`; // add edit and remove buttons
    todoList.appendChild(todoItem); // add the li element to the ul element
  });
}

// UPDATE function to edit a todo item
function editTodo(index) {
  const todoItem = prompt("Enter the new todo item");
  todo[index] = todoItem; // update the todo item in the array
  displayTodo(); // display the todo items on the page

}

// DElETE function to remove a todo item
function removeTodo(index) {
  todo.splice(index, 1); // remove the todo item from the array
  displayTodo(); // display the todo items on the page
}

// Save the todo items to local storage
function saveTodo() {
  localStorage.setItem("auth", JSON.stringify(todo));
}

// Show todo on page load
displayTodo();

// Search todo item

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTodo = todo.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );
  displayTodo(filteredTodo);
});
