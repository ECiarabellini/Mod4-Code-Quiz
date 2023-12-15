// lose 10 secs if wrong

var timer = document.getElementById("timer");
var startCard = document.getElementById("start");
var buttonStartQuiz = document.getElementById("button-start-quiz");
var quizCard = document.getElementById("quiz-card");
var complete = document.getElementById("complete");
var quizQuestion = document.getElementById("question");
var quizOption1 = document.getElementById("o-1");
var quizOption2 = document.getElementById("o-2");
var quizOption3 = document.getElementById("o-3");
var quizOption4 = document.getElementById("o-4");
var optionButtons = document.querySelectorAll('.option');


function startQuiz(){
    startCard.style.display = "none";
    quizCard.style.display = "block";
    quizTimer();
    showQuestion(q1);
}

function quizTimer() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timer.textContent = "Time: " + timeLeft;
        timeLeft--;
      } else {
        timer.textContent = 'Time: 0';
        clearInterval(timeInterval);
        quizCard.style.display = "none";
        complete.style.display = "block";
      }
    }, 1000);
}


function showQuestion(quest) {
    quizQuestion.textContent = quest[0];
    quizOption1.textContent = quest[1];
    quizOption2.textContent = quest[2];
    quizOption3.textContent = quest[3];
    quizOption4.textContent = quest[4];
}

function playGame(event) {
    console.log("Option button was clicked", event.target)
    //determine if answer was right or wrong
    //add points to score if answer was correct
    //subtract time if answer was incorrect
    //log right/wrong to #feedback-text and make display
    //show next question
}

var q1 = ["What is the purpose of the JavaScript typeof operator?", 
'a) To check if a variable is defined',
'b) To determine the data type of a variable',
'c) To create a new variable', 
'd) To compare two variables',
'b']

var q2 = ["Which of the following methods is used to add a new element to the end of an array in JavaScript?",
"array.addEnd(element)",
"b) array.append(element)",
"c) array.push(element)",
"d) array.insertEnd(element)",
"c"]

var q3 = ["What is the purpose of the JavaScript setTimeout function?",
"a) To set a timer for executing a function after a specified delay",
"b) To stop the execution of a function",
"c) To create a loop in JavaScript",
"d) To define a timeout for network requests",
"a"]

var q4 = ["In JavaScript, which keyword is used to declare a variable that cannot be reassigned?",
"a) let",
"b) const",
"c) var",
"d) static",
"b"]

var q5 = ["What does the JavaScript === operator check for?",
"a) Value equality without type conversion",
"b) Value equality with type conversion",
"c) Reference equality without type conversion",
"d) Reference equality with type conversion",
"a"]

allQs=[q1,q2,q3,q4,q5]
var score = 0;
buttonStartQuiz.addEventListener("click",startQuiz);
optionButtons.forEach((button) => {
    button.addEventListener('click', playGame)  //run the playGame function when any option button is clicked
})


//update quiz-card contents with questions. data attributes for correct answers? 
//once button is clicked in quiz-card, cycle to next question and update feeback
//with correct/wrong text. Add to score total if right, subtract from timer if wrong
// when beginning to type initials, hide feedback section 
//when initials are submitted, save that data to the local storage and display
// on high-scores page
//make high scores page buttons functional.
//high scores it's own webpage?