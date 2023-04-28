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
// var questionCard = document.getElementById("quiz-questions")
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
    showQuestion();
    
})

// hides start screen
function startQuiz() {
     var quizStart = document.getElementById("quiz-start");
     quizStart.setAttribute("class", "hide");
     
}

// Supposed to load questions with this function but can't get it to work
function showQuestion() {
     questionCard.removeAttribute("class")
     var activeQuestion = questions[activeQuestionIndex];
     var questions = document.getElementById("question-title");
     questions.textContent = activeQuestion.title;
     choices.innerHTML = " ";

     for (var i =0; i < questions.length; i++) {
          var choiceButton = document.createElement("button");
          choiceButton.setAttribute("class", "choices");
          choiceButton.setAttribute("id", choices);

          choiceButton.textContent = choices; 
          choiceButton.onclick = choicesClick;
          choices.appendChild(choiceButton); 
     };
}
// something like this to click on buttons that should be loading. Added in sound for right and wrong answers but can't test because questions won't load
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
          endQuiz()
     }else {
          showQuestion();
     }
}    

function endQuiz() {
    // Should show quiz end div with score, initial input, and submit button
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
