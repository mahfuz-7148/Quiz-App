const answerOptions = document.querySelector(".answerOptions");
const nextQuestionBtn = document.querySelector(".nextQuestionBtn");

let quizCategory = "programming";
let currentQuestion = null

const getRandomQuestion = () => {
  const categoryQuestions = questions.find(
    (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
  ).questions || [];

    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
    return randomQuestion;
};



const handleAnswer = (option, answerIndex) => {
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' : 'incorrect')

  !isCorrect ? hightlightCorrect() : ''

  answerOptions.querySelectorAll(".answerOption").forEach(option => option.style.pointerEvents = 'none')
}

const renderQuestion = () => {
    currentQuestion = getRandomQuestion()
  if (!currentQuestion) return
  console.log(currentQuestion)

    answerOptions.innerHTML = ''
    document.getElementById("questionText").textContent = currentQuestion.question


    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li')
        li.className =
          "flex items-center p-2 bg-purple-100 rounded text-gray-900 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#dad5fd]";
        li.classList.add("answerOption");
        li.textContent = option
      answerOptions.appendChild(li)
      li.addEventListener("click", () => handleAnswer(li, index));
    });
}

renderQuestion()

nextQuestionBtn.addEventListener('click', renderQuestion)