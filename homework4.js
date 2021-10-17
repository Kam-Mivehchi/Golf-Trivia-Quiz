var startButton = document.querySelector("#start");
var mainContent = document.querySelector("#main-content");
var nextButton = document.querySelector('#next');
var currentQuestion = 0;

var questions = [
  '<h1> "What is 10/2?"</h1>\n',
  '<p> question 2</p>',
  '<p>question 3'
]
var answersOne = [
  "<button id='no'> choice 1</button>",
  "<button id ='correct'> 5</button>",
  "<button>correct</button>"
]
var answersTwo =[
  "<button> choice 1</button>",
  "<button class ='correct'> choice 2</button>",
  "<button>correct</button>"
]

var answerArray =[
  answersOne,
  answersTwo
]
startButton.addEventListener('click', function(event){
  currentQuestion++;
  if(currentQuestion !== 0){
    startButton.remove();
  }
  
    mainContent.innerHTML = questions[currentQuestion-1]+answerArray[currentQuestion-1];
    mainContent.setAttribute('style',"display:inline-block");
    
  
  
  
});

document.querySelector("#correct").addEventListener(function(event){
  
  
  
    mainContent.innerHTML = questions[currentQuestion-1]+answerArray[currentQuestion-1];
    mainContent.setAttribute('style',"display:inline-block");
    startButton.remove();
});

mainContent.addEventListener('click', function(event){
  

  mainContent.innerHTML = "SUCKS LOSER";
  
  
});
