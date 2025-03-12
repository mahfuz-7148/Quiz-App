const answerOptions = document.querySelector(".answerOptions");

let quizCategory = "programming";

const getRandomQuestion = () => {
  const categoryQuestions = questions.find(
    (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
  ).questions || [];

    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
    return randomQuestion;
};

const renderQuestions = () => {
    const currentQuestion = getRandomQuestion()
    if (!currentQuestion) return

    answerOptions.innerHTML = ''
    document.getElementById("questionText").textContent = currentQuestion.question


    currentQuestion.options.forEach(option => {
        const li = document.createElement('li')
        li.className =
          "flex items-center p-2 bg-purple-100 rounded text-gray-900 font-medium";
        li.classList.add("answerOption");
        li.textContent = option
        answerOptions.appendChild(li)
    });
}

renderQuestions()