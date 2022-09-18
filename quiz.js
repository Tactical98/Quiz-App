const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

}


function setNextQuestion() {

}
const questions = [
    {
        question: 'who is the first HOD of Computer science department',
        answers: [
            { text:"4", correct: true},
            { text:"54", correct: false},

        ]
    }
]