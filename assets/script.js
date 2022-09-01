


let questionBank = [
  {
    q: "What is 10/2?",
    choices: [
      1,
      3,
      4,
      5
    ],
    answer: 5,
  },
  {
    q: "Who invented JavaScript?",
    choices: [
      "Brendan Eich",
      "Sheryl Sandberg",
      "Douglas Crockford"
    ],
    answer: "Brendan Eich",
  },
  {
    q: "Which one of these is a JavaScript package manager?",
    choices: [
      "npm",
      "TypeScript",
      "Node.js",
    ],
    answer: "npm",
  },
  {
    q: "Which tool can you use to ensure code quality?",
    choices: [
      "ESLint",
      "RequireJS",
      "jQuery",
      "Angular"
    ],
    answer: "ESLint",
  },
  {
    q: "Which of the following is not JavaScript Data Types?",
    choices: [
      "Undefined",
      "Number",
      "Boolean",
      "Float"
    ],
    answer: "Float",
  },
  {
    q: "Which company developed JavaScript?",
    choices: [
      "IBM",
      "Sun Microsystems",
      "Bell Labs",
      "Netscape"
    ],
    answer: "Netscape",
  },
  {
    q: "Inside which HTML element do we put the JavaScript?",
    choices: [
      "<style>",
      "<meta>",
      "<script>"
    ],
    answer: "<style>",
  },
  {
    q: "Which of the following is correct about features of JavaScript?",
    choices: [
      "Less server interaction",
      "Increased interactivity",
      "Richer interfaces",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    q: "Choose the correct JavaScript syntax to change the content of the following HTML code",
    choices: [
      "Client-side JavaScript does not allow the reading or writing of files",
      "JavaScript doesn't have any multi-threading or multiprocessor capabilities",
      "All of the above"
    ],
    answer: "Float",
  },

];
let time = 10
// * questionBank.length

//Init function to render the start screen/landing page

let mainElement = document.querySelector('main')
let startBtn = document.querySelector('#start')
let headingEl = document.querySelector('#heading')
let stageEl = document.querySelector('#stage')
let currentQuestion = 0

startBtn.addEventListener('click', startQuiz)
//startquiz function that creates a timer, deletes the landing page then starts

function startQuiz() {
  startBtn.remove()
  document.querySelector('#instructions').remove()
  createTimer()
  renderQuestions()
}

function createTimer() {
  let timerEl = document.createElement("h2")
  timerEl.textContent = `Time left: ${time}`
  mainElement.appendChild(timerEl)

  setInterval(() => {
    timerEl.textContent = `Time left: ${--time}`
    if (time <= 0) {
      clearInterval()
      timerEl.remove()
    }
  }, 1000)

}


//create quiz question function that takes in the current question number then validates it, then if current question is less than questionBank.length end the game
function renderQuestions() {

  if (currentQuestion > questionBank.length - 1) {
    //end game
  }
  headingEl.classList.add("question")
  headingEl.textContent = `${questionBank[currentQuestion].q}`


  //create buttons and add them to stageEl

  questionBank[currentQuestion].choices.map((choice) => {
    //create button
    let button = document.createElement("button");
    //fill button with answer choice
    button.textContent = choice;

    //add a listener to validate and change
    button.addEventListener('click', checkAndGo)
    //add class to button
    button.classList.add("answerChoice")
    //append button to stage
    stageEl.appendChild(button)
  })


}
//validate function that checks if answer is correct then changes the color of the quiz and scores the points



//end game function that removes all elements from the main screen and displays a form that saves user input to local storage
function endGame() {
  //displayh messages 
  //display scores 
  // display input
  //save score
}

//high scores display highscores from local storage and play again






