var startButton = document.querySelector("#start");
var mainContent = document.querySelector("#main-content");
var nextButton = document.querySelector('#next');
var currentQuestion = 0;

var questions = [
  '<h1> What is 10/2?</h1>\n',
  '<h1>Who invented JavaScript?</h1>\n',
  '<h1>Which one of these is a JavaScript package manager?</h1>\n',
  '<h1> Which tool can you use to ensure code quality?</h1>\n',
  '<h1>Which of the following is not JavaScript Data Types?\n',
  '<h1>Which company developed JavaScript?</h1>\n',
  '<h1> Inside which HTML element do we put the JavaScript?</h1>\n',
  '<h1> Which of the following is correct about features of JavaScript?</h1>\n',
  '<h1>Choose the correct JavaScript syntax to change the content of the following HTML code</h1>\n',

]
var answersOne = [
  "<button>2</button>" ,
  "<button>5</button>" ,
  "<button>33</button>" ,
  "<button>3</button>"
]
var answersTwo =[
  "<button>Brendan Eich</button>",
  "<button>Sheryl Sandberg</button>",
  "<button>Douglas Crockford</button>"
]
var answersThree = [
  "<button>npm</button>" ,
  "<button>TypeScript</button>" ,
  "<button>Node.js</button>" ,
]
var answersFour =[
  "<button> ESLint</button>",
  "<button> RequireJS</button>",
  "<button>jQuery</button>",
  "<button>Angular</button>"
]
var answersFive =[
  "<button>Undefined</button>",
  "<button> Number</button>",
  "<button>Boolean</button>",
  "<button>Float</button>"
]
var answersSix = [
  "<button>IBM</button>" ,
  "<button>Sun Microsystems</button>" ,
  "<button>Bell Labs</button>" ,
  "<button>Netscape</button>"
]
var answersSeven =[
  "<button>' <style>'</button>",
  "<button> <meta></button>",
  "<button><script></button>"
]
var answersEight = [
  "<button>Less server interaction</button>" ,
  "<button>Increased interactivity</button>" ,
  "<button>Richer interfaces</button>" ,
  "<button>All of the above</button>"
]
var answersNine =[
  "<button> Client-side JavaScript does not allow the reading or writing of files</button>",
  "<button>  JavaScript doesn't have any multi-threading or multiprocessor capabilities</button>",
  "<button>All of the above</button>"
]




var answerArray =[
  answersOne,
  answersTwo,
  answersThree,
  answersFour,
  answersFive,
  answersSix,
  answersSeven,
  answersEight,
  answersNine,
  
]

startButton.addEventListener('click', function(event){
  currentQuestion++;
  if(currentQuestion !== 0){
    startButton.remove();
  }
  
    mainContent.innerHTML = questions[currentQuestion-1]+answerArray[currentQuestion-1];
    mainContent.setAttribute('style',"display:inline-block, background:blue");
    
  
  
  
});



mainContent.addEventListener('click', function(event){
  event.preventDefault();
  currentQuestion++;
  
    //display next question
    mainContent.innerHTML = questions[currentQuestion-1]+answerArray[currentQuestion-1];
    mainContent.setAttribute('style',"display:inline-block");
    var count = 90;
    var interval = setInterval(function(){
      document.getElementById('count').innerHTML=count;
      count--;
      if (count === 0){
        clearInterval(interval);
        
        alert("You're out of time!");
      }
    }, 1000);
  
});

