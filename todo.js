// Define an array to store the items
var todoList = [];

// Function to add a new item
function addTodo(item) {
  todoList.push(item);
  displayTodos();
}

// Function to remove an item
function removeTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}

// Function to view the list
function displayTodos() {
  var list = document.getElementById("todo-list");
  list.innerHTML = "";
  for (var i = 0; i < todoList.length; i++) {
    var item = document.createElement("li");
    item.innerHTML = todoList[i] + ' <button onclick="removeTodo(' + i + ')">X</button>';
    list.appendChild(item);
  }
}
