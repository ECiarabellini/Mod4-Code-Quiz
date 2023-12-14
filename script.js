// lose 10 secs if wrong

//when button-start-quiz is clicked, #timer set to 75 
//start card display=none and quiz-card display=block

// var quizInterval = setInterval (timerFunction,1000)
// quiz function :
// if time left >1

var timer = document.querySelector("#timer");
var startCard = document.getElementById("start");
var buttonStartQuiz = document.getElementById("button-start-quiz");
var quizCard = document.getElementById("quiz-card");
var complete = document.getElementById("complete");


function startQuiz(){
    quizTimer();
    startCard.style.display = "none";
    quizCard.style.display = "block"

}

function quizTimer() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timer.textContent = timeLeft;
        timeLeft--;
      } else {
        timer.textContent = '00';
        clearInterval(timeInterval);
        quizCard.style.display = "none";
        complete.style.display = "block";
      }
    }, 1000);
}
  
buttonStartQuiz.addEventListener("click",startQuiz);
