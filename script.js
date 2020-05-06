// the answers attribute in an array
let questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language", 
      " Hyperlinks and Text Markup Language",
      " Home Tool Markup Language",
      "None of the above",
    ],
    answer: 1
  },
  {
    question: "What is the correct sequence of HTML tags for starting a webpage?",
    answers: [
      "Head, Title, HTML ",
      "Title, Head, HTML",
      "None is the answer",
      "HTML, Head, Title ",
    ],
    answer: 4
  },
  {
    question: "Choose the correct HTML tag for the largest heading.",
    answers: [
      "h1",
      "Heading",
      "Header",
      "h6",
    ],
    answer: 1
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    answers: [
      "br",
      "Breakline",
      "Linebreak",
      "rb",
    ],
    answer: 1
  },
  {
    question: "Who is making the Web Standards? ",
    answers: [
      "Mozilla",
      "Chrome",
      "Apple",
      "The World Wide Web Consortium",
    ],
    answer: 4
  },
]

let question = document.getElementById('question')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')
let score = document.getElementById('score')
let nextbtn = document.getElementById('nextbtn')
let questionCounter = document.getElementById('questionCounter')
let finalScore = document.getElementById('finalScore')
let index = 0
let curremtScore = 0

// loads the question based on the currecnt index tthat holds the current question to be answered
const load = () => {
  finalScore.style.display = 'none'
  question.innerHTML = questions[index].question
  option1.innerHTML = questions[index].answers[0]
  option2.innerHTML = questions[index].answers[1]
  option3.innerHTML = questions[index].answers[2]
  option4.innerHTML = questions[index].answers[3]
  questionCounter.innerHTML = `${index+1}/${questions.length}`
  score.innerHTML = curremtScore
}

// call the load function
load()

// check if the answer chaosen is correct 
check = (e) => {
  let id = e.id.split('')
  if(id[id.length-1] == questions[index].answer) {
    curremtScore++
    e.className = "correct"
    setScore()
  } else {
    e.className = "wrong"
  }
  // check if tis is the last question
  if(index == (questions.length -1)) {
    finalScore.style.display = 'block'
    finalScore.innerHTML = `Your Final Score is ${curremtScore}/${questions.length}`
  }
}

// update score
setScore = () => {
  score.innerHTML = curremtScore
}

// runs when selected an answer
selectOption = (e) => {
 check(e)
 lockOption()
}

// locak all the options after choosing an answer
lockOption = () => {
  option1.style.pointerEvents = "none"
  option2.style.pointerEvents = "none"
  option3.style.pointerEvents = "none"
  option4.style.pointerEvents = "none"
}

// open all the new loaded back
openOption = () => {
  option1.style.pointerEvents = "auto"
  option2.style.pointerEvents = "auto"
  option3.style.pointerEvents = "auto"
  option4.style.pointerEvents = "auto"
  option1.className = "options"
  option2.className = "options"
  option3.className = "options"
  option4.className = "options"
}


// next operation handler
next = () => {
  index++
  if((index+1) == questions.length) {
    nextbtn.style.display = "none"
  }
  load()
  openOption()
}