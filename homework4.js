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
  "<button>2</button>",
  "<button>5</button>",
  "<button>33</button>",
  "<button>3</button>"
]
var answersTwo = [
  "<button>Brendan Eich</button>",
  "<button>Sheryl Sandberg</button>",
  "<button>Douglas Crockford</button>"
]
var answersThree = [
  "<button>npm</button>",
  "<button>TypeScript</button>",
  "<button>Node.js</button>",
]
var answersFour = [
  "<button> ESLint</button>",
  "<button> RequireJS</button>",
  "<button>jQuery</button>",
  "<button>Angular</button>"
]
var answersFive = [
  "<button>Undefined</button>",
  "<button> Number</button>",
  "<button>Boolean</button>",
  "<button>Float</button>"
]
var answersSix = [
  "<button>IBM</button>",
  "<button>Sun Microsystems</button>",
  "<button>Bell Labs</button>",
  "<button>Netscape</button>"
]
var answersSeven = [
  "<button>' <style>'</button>",
  "<button> <meta></button>",
  "<button><script></button>"
]
var answersEight = [
  "<button>Less server interaction</button>",
  "<button>Increased interactivity</button>",
  "<button>Richer interfaces</button>",
  "<button>All of the above</button>"
]
var answersNine = [
  "<button> Client-side JavaScript does not allow the reading or writing of files</button>",
  "<button>  JavaScript doesn't have any multi-threading or multiprocessor capabilities</button>",
  "<button>All of the above</button>"
]




var answerArray = [
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
var startButton = document.querySelector("#start");
var intro = document.querySelector(".landing");
var nextButton = document.querySelector('#next');
var quizContent = document.querySelector('.quiz');
var currentQuestion = 0;

let questionBank = [
  {
    q: "What is 10/2?",
    choices: [1, 3, 4, 5],
    answer: '5',
  },
  {
    q: "Who invented JavaScript??",
    choices: ["Brendan Eich", "Sheryl Sandberg", "Douglas Crockford"],
    answer: "Brendan Eich",
  }

];
let time = questionBank.length * 10

startButton.addEventListener('click', function (event) {
  event.preventDefault();
  //remove the start button
  startButton.remove();


  //hide the intro content and render the quiz questions
  intro.setAttribute('style', "display:none");
  quizContent.setAttribute('style', 'display:flex')
  quizContent.querySelector('h2').innerHTML = questionBank[currentQuestion].q
  // document.querySelector('.choices').innerHTML = questionBank[currentQuestion].choices.map(option => {

  //   return option
  // })
  questionBank[currentQuestion].choices.map((options) => {
    let choiceEl = document.createElement("button")

    choiceEl.textContent = options
    choiceEl.setAttribute('class', 'selection')
    //add user feedback click function to each answer choiceEl
    document.querySelector('.choice-wrapper').appendChild(choiceEl)
    choiceEl.onclick = checkAndChange

  })

  currentQuestion++;



});

function checkAndChange() {
  //if its correct add green styling for .5 sec, increment the score,go to nextQuestion
  let element = this

  if (element.textContent == questionBank[currentQuestion - 1].answer) {
    element.classList.add('success')
    console.log(element)
  } else {
    //if wrong add red styling , decrement the score, decrement the time and go to next question 
    element.classList.add('fail')
  }

  //remove the styling
  setTimeout(() => {
    if (element.classList.contains('fail')) {
      element.classList.remove('fail')
    } else {
      element.classList.remove('success')
    }
  }, 500)

}

// mainContent.addEventListener('click', function (event) {
//   event.preventDefault();
//   currentQuestion++;

//   //display next question
//   mainContent.innerHTML = questions[currentQuestion - 1] + answerArray[currentQuestion - 1];
//   mainContent.setAttribute('style', "display:inline-block");
//   var count = 90;
//   var interval = setInterval(function () {
//     document.getElementById('count').innerHTML = count;
//     count--;
//     if (count === 0) {
//       clearInterval(interval);

//       alert("You're out of time!");
//     }
//   }, 1000);

// });

