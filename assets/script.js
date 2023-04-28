// Starting with the quiz questions object arrays
var questions = [
     {
          questionTitle: "Commonly used data types DO NOT include:",
          choices: ["strings", "alerts", "numbers", "booleans"],
          answer: "alerts"
     },
     {
          questionTitle: "The condition in an if / else statement is enclosed within _____.",
          choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
          answer: "parentheses"
     },
     {
          questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
          choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
          answer: "console.log"
     },
     {
          questionTitle: "String values must be enclosed within ______ when being assigned to variables.",
          choices: ["commas", "curly brackets", "quotes", "parentheses"],
          answer: "quotes"
     },
     {
          questionTitle: "Arrays in Javascript can be used to store which of the following:",
          choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
          answer: "all of the above"
     },
];

// Variables possibly needed declared using getElementById
var timer = document.getElementById("timer");
var questionCard = document.getElementById("quiz-questions")
// var questions = document.getElementById("question-title"); using locally in function showQuestion()
var choices = document.getElementById("choices");
var startButton = document.getElementById("start-btn")
var cardTitle = document.getElementById("card-title")
var quizEnd = document.getElementById("quiz-end")
var finalScore = document.getElementById("final-score")
var initials = document.getElementById("initials")
var submitButton = document.getElementById("submit-btn")
var activeQuestionIndex = 0;
var timeLeft;
var timeInterval;


// WHEN I click the start button
// THEN a timer starts and I am presented with a question

startButton.addEventListener("click", function() {
     startQuiz()
     var timeLeft = 75;
     var timeInterval = setInterval(function () {
    
     if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;

    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;

    } else {
      timer.textContent = '';
      clearInterval(timeInterval);
    }
    }, 1000);
    // need a function to show/link to high score / initials page
})


function startQuiz() {
     var quizStart = document.getElementById("quiz-start");
     quizStart.setAttribute("class", "hide");

}

// still need a function to get the questions card to show after making start screen hidden
function showQuestion() {
     var activeQuestion = questions[activeQuestionIndex];
     var questions = document.getElementById("question-title");
     questions.textContent = activeQuestion.questionTitle;
     choices.innerHTML = " ";

     activeQuestion.choices.forEach(function(choices, i) {
          var choiceButton = document.createElement("button");
          choiceButton.setAttribute("class", "choices");
          choiceButton.setAttribute("value", choices);

         // choiceButton.textContent = i + 1 + ". " choices; 
         // choiceButton.onclick = something here for correct/incorrect sound maybe?

          // choices.appendChild(choiceButton); something like this to show choices buttons on page maybe?
     });
}

function choicesClick() {
     if (choices.value !== questions[activeQuestionIndex].answer) {
          timeLeft -= 10;
          if (timeLeft < 0) {
               timeLeft = 0;
          }
          var incorrectSound = document.getElementById("incorrect");
          incorrectSound.play();
          timer.textContent = timeLeft;
     }else {
          var correctSound = document.getElementById("correct");
          correctSound.play();
     }

     activeQuestionIndex++;
     
     if (activeQuestionIndex === questions.length) {
          // need to call a function that ends the quiz and shows the initial/high scores page
     }
}    



// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// go to next question

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// game over function?
// goes to next card 

// WHEN the game is over
// THEN I can save my initials and my score
// Will likely need document.querySelector or document.getElementById
// Will likely need localStorage.setItem and localStorage.getItem

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
