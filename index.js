const quizData = [
    {
    question: "When did Nigeria gain independence from British rule?",
    a: "1950",
    b: "1960",
    c: "1970",
    d: "1980",
    correct: "b",
},
    {
    question: "Who was the first president of Nigeria?",
    a: "Nnamdi Azikiwe",
    b: "Obafemi Awolowo",
    c: "Ahmadu Bello",
    d: "Yakubu Gowon",
    correct: "a",
},
    {
    question: "What year did the Nigerian Civil War (Biafran War) begin?",
    a: "1965",
    b: "1967",
    c: "1970",
    d: "1975",
    correct: "b",
},
  {
    question: "Which of these cities was *not* a former capital of Nigeria?",
    a: "Lagos",
    b: "Abuja",
    c: "Kano",
    d: "Calabar",
    correct: "c",
},
  {
    question: "Who was the military head of state during the Nigerian Civil War?",
    a: "Olusegun Obasanjo",
    b: "Yakubu Gowon",
    c: "Murtala Mohammed",
    d: "Ibrahim Babangida",
    correct: "b",
},
  {
    question: "What is the name of Nigeria's national currency?",
    a: "Naira",
    b: "Cedi",
    c: "Pound",
    d: "Dollar",
    correct: "a",
},
  {
    question: "Which of these ethnic groups is *not* one of the three largest in Nigeria?",
    a: "Hausa",
    b: "Igbo",
    c: "Yoruba",
    d: "Efik",
    correct: "d",
},
  {
    question: "In what year was the current constitution of Nigeria adopted?",
    a: "1999",
    b: "2003",
    c: "2010",
    d: "1995",
    correct: "a",
},
  {
    question: "Which Nigerian writer is famous for the novel 'Things Fall Apart'?",
    a: "Chinua Achebe",
    b: "Wole Soyinka",
    c: "Chimamanda Ngozi Adichie",
    d: "Buchi Emecheta",
    correct: "a",
},
  {
    question: "What is the name of the largest river in Nigeria?",
    a: "Niger River",
    b: "Benue River",
    c: "Cross River",
    d: "Ogun River",
    correct: "a",
}
];
const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");
const questionCounter = document.getElementById("questionCounter");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion (){
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = 
        `<div class="question">${currentQuestion.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br></br>
    `;
    questionCounter.innerHTML = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}
function getSelectedAnswer(){
    const answers =  document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if(answer.checked) {
            return answer.value;
        }
    }
    return null;
}   

function calculateScore(){
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

submitButton.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (!selectedAnswer) {
        alert("Please select an answer before proceeding.");
        return;
    }
    calculateScore();
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        result.innerHTML = `You scored ${score} out of ${quizData.length}`;
        quiz.style.display = "none"; //Hide quiz
        submitButton.style.display = "none"; //Hide button
        questionCounter.style.display = "none"; //Hide question counter
    }
});
//Load the first Question
loadQuestion();

