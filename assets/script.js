// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// Something  similar to countdown from activities needed
// function countdown() {
//   var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
     // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }

// Something similar to this activity example might be needed to make question cards hidden/visible?
// var container = document.querySelector(".container");

// container.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");

    // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
       // If the card is clicked while the state is "hidden", we set .textContent to the number 
//       element.textContent = element.dataset.number;
       // Using the dataset property, we change the state to visible because the user can now see the number
//       element.dataset.state = "visible";
   
//     } else {
       // 'Hide' the number by setting .textContent to an empty string
//       element.textContent= "";
      // Use .setAttribute() method
//       element.setAttribute("data-state", "hidden")
     
//     }  
//   }
  
// });


// WHEN I answer a question
// THEN I am presented with another question
// Will likely need addEventListener("click", function() {} correct sound plays with 'correct' message
// event.preventDefault() / event.stopPropagation()
// go to next question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// Will likely need addEventListener("click", function() {} incorrect sound plays with 'wrong' message and time subtracted
// event.preventDefault() / event.stopPropagation()
// function with condition to subtract
// go to next question

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// game over function?
// goes to next card 

// WHEN the game is over
// THEN I can save my initials and my score
// Will likely need document.querySelector or document.getElementById
// Will likelt need localStorage.setItem and localStorage.getItem

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
  
   // Add click event to todoList element
//   todoList.addEventListener("click", function(event) {
//     var element = event.target;
  
     // Checks if element is a button
//     if (element.matches("button") === true) {
       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
       // Store updated todos in localStorage, re-render the list
//       storeTodos();
//       renderTodos();
//     }
//   });
  
   // Calls init to retrieve data and render it to the page on load
//   init()
