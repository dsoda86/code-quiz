
// Something like this needed to store and get high scores
// The following function renders items in a todo list as <li> elements
// function renderTodos() {
     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
  
     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//       var todo = todos[i];
  
//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);
  
//       var button = document.createElement("button");
//       button.textContent = "Complete ✔️";
  
//       li.appendChild(button);
//       todoList.appendChild(li);
//     }
//   }
  
   // This function is being called below and will run when the page loads.
//   function init() {
     // Get stored todos from localStorage
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
     // This is a helper function that will render todos to the DOM
//     renderTodos();
//   }
  
//   function storeTodos() {
     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
  
  // Add submit event to form
//   todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var todoText = todoInput.value.trim();
  
     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }
  
     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });
  