const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 50;
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
var t;
var c=1500;

function setAvailableQuestions()
{
  const totalQuestion = quiz.length;
  for (let i=0; i<totalQuestion; i++)
  {
    availableQuestions.push(quiz[i])
    
  }
  timedCount();
}

function getNewQuestion()
{
  
  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]

  currentQuestion = questionIndex; //qid//
  questionText.innerHTML = currentQuestion.q;

  const index1 = availableQuestions.indexOf(questionIndex);

  availableQuestions.splice(index1, 1);

  if(currentQuestion.hasOwnProperty("img")){
    const img = document.createElement("img");
    img.src = currentQuestion.img;
    questionText.appendChild(img);
  }
  const optionLen = currentQuestion.options.length
  //  console.log(questionIndex)
  for(let i=0; i<optionLen; i++)
  {
    availableOptions.push(i)
  }
  optionContainer.innerHTML = '';
  let animationDelay = 0.15;
  for(let i=0; i<optionLen; i++)
  {
    // random option//
    const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

    const index2 = availableOptions.indexOf(optonIndex);

    availableOptions.splice(index2,1);

    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.style.animationDelay = animationDelay + 's';
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick","getResult(this)");
  }
  // console.log(currentQuestion.options)
  questionCounter++;
}
//-------------------------------------------------------------------------------------------------------------------------------------//

function timedCount()
  {
     if(c == 185) 
     { 
        return false; 
     }
   // for hrs//  
   //   var hours = parseInt( c / 3600 ) % 24;
   //   (hours < 10 ? "0" + hours : hours) + ":"
     var minutes = parseInt( c / 60 ) % 60;
     var seconds = c % 60;
     var result =  + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);            
     $('#timer').html(result);
     
     if(c == 0 )
     {
      quizOver();
              $('#iTimeShow').html('Quiz Time Completed!');
              $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
              c=185;
              $(document).find(".preButton").text("View Answer");
              $(document).find(".nextButton").text("Play Again?");
              quizOver = true;
              return false;
              
     }
     
     c = c - 1;
     t = setTimeout(function()
     {
        timedCount()
     },1000);
  }




//-------------------------------------------------------------------------------------------------------------------------------------//

function getResult(element)
{
  const id = parseInt(element.id);
  if (id === currentQuestion.answer)
  {
    element.classList.add("correct");
    //add indicator
    updateAnswerIndicator("correct");
    correctAnswers++; 
  } 
  else 
  {
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");
    //to show the correct option if wrong selected//
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++)
    {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer)
      {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }
  attempt++;
  unclickableOptions();
}

function unclickableOptions()
{
  const optionLen = optionContainer.children.length;
  for(let i=0; i<optionLen; i++)
  {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function answersIndicator()
{
  answerIndicatorContainer.innerHTML = '';
  const totalQuestion = questionLimit;
  for(let i=0; i<totalQuestion; i++)
  {
    const indicator = document.createElement("div");
    answerIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType)
{
  answerIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

function next()
{
  if (questionCounter === questionLimit)
  {
    quizOver();
  } 
  else
  {
    getNewQuestion();
  }
}

function quizOver()
{
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  quizResult();
}
//result//
function quizResult()
{
  resultBox.querySelector(".total-question").innerHTML = questionLimit;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percentage = (correctAnswers / questionLimit) * 100;
  resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML = correctAnswers + "/" + questionLimit;
}

function resetQuiz()
{
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
}

function tryAgainQuiz()
{
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

function goToHome()
{
  resultBox.classList.add("hide");
  homeBox.classList.remove("hide");
  resetQuiz();
}
//## Starting Point##//
function startQuiz() {
  homeBox.classList.add("hide");
  quizBox.classList.remove("hide");
  setAvailableQuestions();
  getNewQuestion();
  answersIndicator();
}

newFunction();

function newFunction() {
  setTimeout(function () {
    viewResults();
  }, 3000);

  window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = questionLimit;
  };
}

