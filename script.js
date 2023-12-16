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
var initialsField = document.getElementById("initials");
var submitScore = document.getElementById("high-score-submit");
var highScoresPage = document.getElementById("high-scores");
var viewHighScores = document.getElementById("button-highscores");
var buttonGoBack = document.getElementById("go-back");
var scoreBoard = document.getElementById("score-board");
var buttonClearScores = document.getElementById("clear-scores");

function startQuiz(){
    score = 0;
    questionCount = 0;
    timeLeft = 75;
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
      } else if (timeLeft = -1){   //timeLeft is set to -1 when click View High Scores
            clearInterval(timeInterval);
            timer.textContent = "Time: 0";
      }
      else {
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
    var result = event.target.getAttribute('data-feedback');
    feedbackSection.style.display = "inline-block";
    if (result === 'correct'){
        score++;
        feedbackText.textContent = "Correct!"
    } else {
        timeLeft = timeLeft - 10;
        feedbackText.textContent = "Wrong!"
    }
    console.log("score is: ", score);

    optionButtons.forEach((button) => {
        button.setAttribute('data-feedback', 'incorrect');  //resets all the correct/incorrect feedback indicators to incorrect 
    });
    if (questionCount > 4) {
        timeLeft = 0;
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
    initialsField.addEventListener('input', function(){
        feedbackSection.style.display = "none";   //makes correct/incorrect feedback disappear once initials are typed
    });
    submitScore.addEventListener("submit", function(event){
        event.preventDefault();
        var scoreRecord = score + " - " + initialsField.value.trim();
        console.log("scoreRecord: ", scoreRecord);
        scoreBoard.textContent = scoreRecord;
        complete.style.display = "none";
        highScoresPage.style.display = "block";
    })
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
var score;
var questionCount;
var timeLeft;
buttonStartQuiz.addEventListener("click",startQuiz);
optionButtons.forEach((button) => {
    button.addEventListener('click', playGame)  //run the playGame function when any option button is clicked
})
viewHighScores.addEventListener("click", function(){
    timeLeft = -1;
    startCard.style.display = "none";
    quizCard.style.display = "none";
    feedbackSection.style.display = "none";
    highScoresPage.style.display = "block";
    complete.style.display = "none";
});

buttonGoBack.addEventListener('click', function(){
    highScoresPage.style.display = "none";
    startCard.style.display = "block";
});

buttonClearScores.addEventListener('click', function(){
    scoreBoard.textContent = "None";
});
