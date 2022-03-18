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
var timeDeduct = 5


timer.textContent = "Time Remaining: " + timeRemaining

startQuiz.addEventListener("click", function() { 
    setInterval( function() {
        if (timeRemaining > 0) {
        timeRemaining--
        timer.textContent = "Time Remaining: " + timeRemaining
        } else {
            clearInterval
            endQuiz()
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
    var element = event.target 
    
    if (element.matches("li")) {
        var result = document.createElement("div")
        result.setAttribute("id", "result")
        if (element.textContent == question[questionI].answer) {
            result.textContent = "Correct! The correct answer is: " + question[questionI].answer 
        } else {
            timeRemaining = timeRemaining - timeDeduct
            result.textContent = "Wrong! The correct answer is: " + question[questionI.answer]
        }
    }


    questionI++

    if (questionI < question.length) {
        quiz(questionI)
    } else {
        endQuiz()
        result.textContent = "The quiz is done! You finished with " + timeRemaining + " second remaining"
    }
    quizArea.appendChild(result)
}

function endQuiz() {
    quizArea.innerHTML = ""

    var createH2 = document.createElement("h2")
    createH2.setAttribute("id", "createH1")
    createH2.textContent = "Congratulations! You've finished!"

    quizArea.appendChild(createH2)

    var creatP = document.createElement("p")
    createP.setAttribute("createP")

    quizArea.appendChild(createP)

    if (timeRemaining > 0) {
        clearInterval()
    }
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

        while(initial === null) {
            alert("You need to enter you're initial")
            var initials = createInput.value
        }
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }

        var allScores = localStorage.getItem(allScores)
        if (allScores === null) {
            allScores = []
        } else {
            allScores = JSON.parse(allScores)
        }
        allScores.push(finalScore)
        var newScore = JSON.stringify(allScores)
        localStorage.setItem("allScores", newScore)
    })
}