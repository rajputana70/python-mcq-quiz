const quizData = [
  {
    question: `1. What is the output of the following code?\n\nx = 10\ny = 3\nprint(x % y)`,
    options: ["0", "1", "2", "3"],
    answer: "1"
  },
  {
    question: `2. Find the output of this code:\n\nmy_list = [1, 2, 3]\nmy_list.append([4,5])\nprint(len(my_list))`,
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  // Add the remaining questions here
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestionIndex];
  document.getElementById("question-text").innerText = questionData.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  questionData.options.forEach((opt, idx) => {
    const button = document.createElement("button");
    button.innerText = opt;
    button.onclick = () => checkAnswer(opt);
    optionsContainer.appendChild(button);
  });

  document.getElementById("feedback").innerText = "";
}

function checkAnswer(selectedOption) {
  const correct = quizData[currentQuestionIndex].answer;
  const feedback = document.getElementById("feedback");

  if (selectedOption === correct) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = `❌ Wrong! Correct answer: ${correct}`;
    feedback.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("question-box").innerHTML = "<h2>🎉 Quiz Completed!</h2>";
  }
}

// Initial call
loadQuestion();
