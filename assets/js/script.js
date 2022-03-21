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
        question: "What do media queries allow us to do?",
        options: ["Play videos on our page"," Create responsive designs","Change css at different browser widths","Do nothing"],
        answer: "Change css at different browser widths"

    },
    {
        question: "Which one of these is NOT a valid media type for media queries?",
        options: ["All","Screen","Tablet","Speech"],
        answer: "Tablet"
    },
]


var timer = document.querySelector("#timer");
var timeRemaining = 75
var startQuiz = document.querySelector("#start-quiz")
var quizArea = document.querySelector("#quiz")
var questionI = 0
var qList = document.createElement("ul")
var timeDeduct = 15
var currentQ = document.createElement("h2")
var scoreDisplay = document.querySelector("#highScore")
var highScore = localStorage.getItem("highScore")
var initials = localStorage.getItem("initials")

if (highScore === null && initials === null) {
    scoreDisplay.textContent = "No High Score Data"
} else {
    scoreDisplay.textContent = initials + " has the high score of " + highScore
}

timer.textContent = "Time Remaining: " + timeRemaining

startQuiz.addEventListener("click", function() { 
    var quizTimer = setInterval ( function() {
        if (timeRemaining > 0 && (questionI < questions.length)) {
        timeRemaining--
        timer.textContent = "Time Remaining: " + timeRemaining
        } else {
            clearInterval(quizTimer)
            endQuiz()
        }
    }, 1000)
    quiz()
})

var quiz = function() {
    quizArea.innerHTML = ""
    qList.innerHTML = ""

    for (i = 0; i < questions.length; i++) {
        var currentQuestion = questions[questionI].question
        var currentOptions = questions[questionI].options
        quizArea.appendChild(currentQ)
        currentQ.textContent = currentQuestion
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
    var element = event.target 
    
    if (element.matches("li")) {
        var result = document.createElement("div")
        result.setAttribute("id", "result")
        if (element.textContent == questions[questionI].answer) {
            result.textContent = "Correct! The correct answer is: " + questions[questionI].answer 
        } else {
            timeRemaining = timeRemaining - timeDeduct
            result.textContent = "Wrong! The correct answer is: " + questions[questionI].answer
        }
    }


    questionI++

    if (questionI < questions.length) {
        quiz(questionI)
    }
    quizArea.appendChild(result)
}

function endQuiz() {
    quizArea.innerHTML = ""

    var createH2 = document.createElement("h2")
    createH2.setAttribute("id", "createH2")
    createH2.textContent = "Congratulations! You've finished!"

    quizArea.appendChild(createH2)

    var createP = document.createElement("p")
    createP.setAttribute("id", "createP")
    createP.textContent = "The quiz is done! You finished with " + timeRemaining + " seconds remaining"

    quizArea.appendChild(createP)

    createLabel = document.createElement("label")
    createLabel.setAttribute("id", "createLabel")
    createLabel.textContent = "Enter your initials"

    quizArea.appendChild(createLabel)

    var createInput = document.createElement("input")
    createInput.setAttribute("type", "text")
    createInput.setAttribute("id", "initial")
    createInput.textContent = ""

    quizArea.appendChild(createInput)

    var createSubmit = document.createElement("button")
    createSubmit.setAttribute("type", "submit")
    createSubmit.setAttribute("id", "submit")
    createSubmit.textContent = "Submit"

    quizArea.appendChild(createSubmit)

    createSubmit.addEventListener("click", function() {
        var initials = createInput.value

        if (initials === null) {
            alert("Please enter you're initials!")
            var initials = createInput.value
        }

        if (highScore === null) {
            highScore = 0
        }

        if (timeRemaining > highScore) {
            localStorage.setItem("highScore", timeRemaining)
            localStorage.setItem("initials", initials)
        } else {
            createP.textContent = "You didn't beat you're high score. Try again!"
        }
            
    })
}