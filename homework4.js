
var startButton = document.querySelector("#start");
var intro = document.querySelector(".landing");
var nextButton = document.querySelector('#next');
var quizContent = document.querySelector('.quiz');
var currentQuestion = 0;
var score = 0;
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
let time = questionBank.length * 10

startButton.addEventListener('click', renderQs);

function renderQs() {

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

  }
  )
}
function checkAndChange() {
  //if its correct add green styling , increment the score,go to nextQuestion
  let element = this

  if (element.textContent == questionBank[currentQuestion].answer) {
    element.classList.add('success')
    score += 25;
    console.log(score)
  } else {
    //if wrong add red styling , decrement the score, decrement the time and go to next question 
    element.classList.add('fail')
    score -= 25;
  }

  //remove the styling aafter .5 sec
  setTimeout(() => {
    element.setAttribute('class', 'selection')
    document.querySelectorAll('.selection').forEach(el => el.remove())
    currentQuestion++;
    renderQs()
  }, 500)




}



