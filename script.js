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
var feedbackSection = document.getElementById("feedback");
var feedbackText = document.getElementById("feedback-text");
var finalScore = document.getElementById("final-score");

function startQuiz(){
    startCard.style.display = "none";
    quizCard.style.display = "block";
    quizTimer();
    showQuestion(allQs[questionCount]);
}

function quizTimer() {
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timer.textContent = "Time: " + timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
        endGame();
      }
    }, 1000);
}


function showQuestion(quest) {
    quizQuestion.textContent = quest[0];
    quizOption1.textContent = quest[1];
    quizOption2.textContent = quest[2];
    quizOption3.textContent = quest[3];
    quizOption4.textContent = quest[4];
    if (quest[5] === '1'){
        quizOption1.setAttribute('data-feedback','correct');
    } else if (quest[5] === '2'){
        quizOption2.setAttribute('data-feedback','correct');
    } else if (quest[5] === '3'){
        quizOption3.setAttribute('data-feedback','correct');
    } else if (quest[5] === '4'){
        quizOption4.setAttribute('data-feedback','correct');
    }
}

function playGame(event) {
    questionCount++;
    console.log("An option button was clicked: ", event.target);
    var result = event.target.getAttribute('data-feedback');
    console.log("data-feedback result is: ", result);
    feedbackSection.style.display = "inline-block";
    if (result === 'correct'){
        score++;
        feedbackText.textContent = "Correct!"
        console.log("increased score: ", score);
    } else {
        timeLeft = timeLeft - 10;
        feedbackText.textContent = "Wrong!"
        console.log("score is: ", score);
    }

    optionButtons.forEach((button) => {
        button.setAttribute('data-feedback', 'incorrect');  //resets all the correct/incorrect feedback indicators to incorrect 
    });
    if (questionCount > 4) {
        endGame();
    } else {
            showQuestion(allQs[questionCount]);  //replaces current question with the next question
    };
}

function endGame() {
    timer.textContent = 'Time: 0';
    quizCard.style.display = "none";
    complete.style.display = "block";
    finalScore.textContent = "Your final score is " + score + ".";
}

var q1 = ["What is the purpose of the JavaScript typeof operator?", 
'a) To check if a variable is defined',
'b) To determine the data type of a variable',
'c) To create a new variable', 
'd) To compare two variables',
'2']

var q2 = ["Which of the following methods is used to add a new element to the end of an array in JavaScript?",
"a) array.addEnd(element)",
"b) array.append(element)",
"c) array.push(element)",
"d) array.insertEnd(element)",
"3"]

var q3 = ["What is the purpose of the JavaScript setTimeout function?",
"a) To set a timer for executing a function after a specified delay",
"b) To stop the execution of a function",
"c) To create a loop in JavaScript",
"d) To define a timeout for network requests",
"1"]

var q4 = ["In JavaScript, which keyword is used to declare a variable that cannot be reassigned?",
"a) let",
"b) const",
"c) var",
"d) static",
"2"]

var q5 = ["What does the JavaScript === operator check for?",
"a) Value equality without type conversion",
"b) Value equality with type conversion",
"c) Reference equality without type conversion",
"d) Reference equality with type conversion",
"3"]

allQs=[q1,q2,q3,q4,q5]
var score = 0;
var questionCount = 0;
var timeLeft = 500;
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