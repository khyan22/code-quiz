var questions = [
    {
        question: "What is a pseudo-class?",
        options: ["A CSS rule that contains no declarations.","A CSS declaration that hides the element.","An element that has more than one class.","A CSS keyword to target an element's state."],
        answer: "A CSS keyword to target an element's state."

    },
    {
        question:"What is an example of a pseudo-element?",
        options: ["::before","::after","::first-letter","all of the above"],
        answer: "all of the above"

    },
    {
        question:"what does the Z-index property do?",
        options: ["Removes an element from the DOM","changes the stacking order of elements","Changes the opacity of an element.","Forces an element to be positioned relatively."],
        answer: "changes the stacking order of elements"

    },
    {
        question:"What would be console logged if the input variable was set to zero?",
        options: ["one","two","one and two","two and three"],
        answer: "one and two"

    },
    {
        question:"Which variable(s) are considered global?",
        options: ["input","input and sum","sum","sum and num"],
        answer: " input"

    },
]


var timer = document.querySelector("#timer");
var timeRemaining = 75
var startQuiz = document.querySelector("#start-quiz")
var quizArea = document.querySelector("#quiz")
var quizOption = document.querySelector("#options")
var questionI = 0
var qList = document.createElement("ul")
var questionInd = document.createElement("h2")



timer.textContent = "Time Remaining: " + timeRemaining

startQuiz.addEventListener("click", function() { 
    setInterval( function() {
        if (timeRemaining > 0) {
        timeRemaining--
        timer.textContent = "Time Remaining: " + timeRemaining
        } else {
            clearInterval
        }
    }, 1000)

    quiz()
})

var quiz = function() {
    quizArea.innerHTML = ""
    quizArea.appendChild(questionInd)
    for (i = 0; i < questions.length; i++) {
        var currentQuestion = questions[questionI].question
        var currentOptions = questions[questionI].options
        questionInd.textContent = currentQuestion
    }    
    currentOptions.forEach(function (newQ) {
        var qListItem = document.createElement("li")
        qListItem.textContent = newQ
        quizArea.appendChild(qList)
        qList.appendChild(qListItem)
        qListItem.addEventListener("click", validate)
    })
}

function validate(event) {

}