//dom elements
let mainElement = document.querySelector('main')
let startBtn = document.querySelector('#start')
let headingEl = document.querySelector('#heading')
let optionsEl = document.querySelector('#options')
let choices = document.querySelectorAll('.answerChoice')

//new dom elements 
let timerEl = document.createElement("h2")
let scoreEl = document.createElement("h2")



//array of questions
let questionBank = [
  {
    q: "What type of golf clubs are used for long shots from the tee or fairway",
    choices: [
      "Woods",
      "Irons",
      "Wedges",
      "Putter"
    ],
    answer: "Woods",
  },
  {
    q: 'What golfer has a beverage named after him?',
    choices: [
      "Billy Casper",
      "Ben Hogan",
      "Jack Nicklaus",
      "Arnold Palmer"
    ],
    answer: "Arnold Palmer",
  },
  {
    q: "What year was the PGA of America founded?",
    choices: [
      "1916",
      "1886",
      "1932",
      "1949"
    ],
    answer: "1916",
  },
  {
    q: "What golfer invented the modern sand wedge?",
    choices: [
      "Gene Sarazen",
      "Ben Hogan",
      "Byron Nelson",
      "Sam Snead"
    ],
    answer: "Gene Sarazen",
  },
  {
    q: "Who was named PGA Tour Rookie of the Year in 1996?",
    choices: [
      "Vijay Singh",
      "Tiger Woods",
      "Todd Hamilton",
      "Hale Irwin"
    ],
    answer: "Tiger Woods",
  },
  {
    q: "Who was the first winner of the U.S. Women's Open?",
    choices: [
      "Babe Zaharias",
      "Louise Suggs",
      "Patty Berg",
      "Judy Rankin"
    ],
    answer: "Patty Berg",
  },
  {
    q: "In 2004, who became the oldest golfer to win PGA Tour Rookie of the Year?",
    choices: [
      "Todd Hamilton",
      "Carlos Franco",
      "Vijay Singh",
      "Frank Lickliter II"
    ],
    answer: "Todd Hamilton",
  },
  {
    q: "What golfer set a PGA Tour record in 1945 by winning 18 tournaments?",
    choices: [
      "Ben Hogan",
      "Brian Nelson",
      "Bobby Jones",
      "Bing Crosby"
    ],
    answer: "Brian Nelson",
  },
  {
    q: "What golfer replaced Tiger Woods at the top of the Official World Golf Rankings in 2004?",
    choices: [
      "Tom Watson",
      "Phil Mickelson",
      "Todd Hamilton",
      "Vijay Singh"
    ],
    answer: "Vijay Singh",
  },
  {
    q: 'What golfer was known as "The Golden Bear"?',
    choices: [
      "Billy Casper",
      "Ben Hogan",
      "Jack Nicklaus",
      "Arnold Palmer"
    ],
    answer: "Jack Nicklaus",
  },

];


//game parameters
let currentQuestion = 0;
let score = 0;
let time = 10 * questionBank.length

//startquiz function that creates a timer, deletes the instructions then starts

function startQuiz() {


  startBtn.remove()
  document.querySelector('#instructions').classList.toggle("hidden")
  choices.forEach((el) => el.classList.toggle("hidden"))
  createTimer()
  renderQuestions()
}

function createTimer() {
  timerEl.textContent = `Time left: ${time}`
  scoreEl.textContent = `Score: ${score}`

  mainElement.appendChild(timerEl)
  mainElement.appendChild(scoreEl)

  let gametime = setInterval(() => {
    timerEl.textContent = `Time left: ${--time}`
    if (time <= 0) {
      timerEl.remove()
      clearInterval(gametime)
      endGame()
    }
  }, 1000)

}


//render quiz function, updates the dom for current question and call validate function
function renderQuestions() {
  //update content of each answer choices
  headingEl.textContent = questionBank[currentQuestion].q
  choices.forEach((el, i) => {
    el.textContent = questionBank[currentQuestion].choices[i]
    el.onclick = checkAndGo
  })


}

//validate function that checks if answer is correct then changes the color of the quiz and scores the points, also sets the time to 0 if run out of questions

function checkAndGo(e) {

  console.log(e.target.textContent)
  if (currentQuestion > questionBank.length - 1) {
    //end game
    time = 0
  }

  if (e.target.textContent == questionBank[currentQuestion].answer) {
    e.target.classList.add('valid')
    score += 5
  } else {
    e.target.classList.add('invalid')
    time -= 5
    score -= 5

  }
  scoreEl.textContent = `Score: ${score}`
  let result = setTimeout(() => {
    ++currentQuestion;
    e.target.classList.remove('valid')
    e.target.classList.remove('invalid')
    renderQuestions()
  }, 1000)
  result


}



//end game function that removes all elements from the main screen and displays a form that saves user input to local storage
function endGame() {

  choices.forEach((choice) => {
    choice.classList.toggle('hidden')

  })
  //display messages 
  headingEl.textContent = "Congratulations, you've reached the end"
  let form = document.createElement("form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let recentScores = JSON.parse(localStorage.getItem("score")) || []
    let initial = e.target[0].value

    recentScores.push({ "initial": initial, "score": score })
    console.log(recentScores)
    localStorage.setItem('score', JSON.stringify(recentScores))
    form.remove()
    displayScores()
  })
  // display input
  form.innerHTML = `
  <label for="initials"> Initials 
  <input id="initials" name="initials" placeholder="Enter your Initials"/>
  </label>
  <button type="submit" value="Submit">Submit</button>
  `
  mainElement.appendChild(form)




}



//high scores display highscores from local storage and play again
function displayScores() {
  mainElement.innerHTML = ``
  let recentScores = JSON.parse(localStorage.getItem("score"))
  let scoreDiv = document.createElement("table")
  scoreDiv.innerHTML = ` 
  <tr>
  <th>Name</th>
  <th>Score</th>
  </tr>`
  recentScores.sort((a, b) => a.score - b.score)
  for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr")
    row.innerHTML = `
    <td>${recentScores[i].initial}</td>
    <td>${recentScores[i].score}</td>
    `
    scoreDiv.appendChild(row)
  }

  mainElement.appendChild(scoreDiv)
}




startBtn.addEventListener('click', startQuiz)
document.getElementById("scoreLink").addEventListener("click", displayScores)


