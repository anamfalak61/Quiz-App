const TIME_PER_QUESTION = 15;

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};
const els = {
  categoryList: document.getElementById("category-list"),
  progressText: document.getElementById("progress-text"),
  progressBar: document.getElementById("progress-bar"),
  timeLeft: document.getElementById("time-left"),
  timerBar: document.getElementById("timer-bar"),
  questionText: document.getElementById("question-text"),
  options: document.getElementById("options"),
  nextBtn: document.getElementById("next-btn"),
  scoreText: document.getElementById("score-text"),
  feedbackText: document.getElementById("feedback-text"),
  reviewList: document.getElementById("review-list"),
  restartBtn: document.getElementById("restart-btn")
};

const state = { questions: [], index: 0, selected: null, answers: [], timeLeft: 0, timerId: null };

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
}

/* Start screen */
function renderCategories() {
  els.categoryList.innerHTML = "";
  Object.keys(QUESTIONS).forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = `${category} (${QUESTIONS[category].length} questions)`;
    btn.addEventListener("click", () => startQuiz(category));
    els.categoryList.appendChild(btn);
  });
}

function startQuiz(category) {
  state.questions = QUESTIONS[category];
  state.index = 0;
  state.answers = [];
  showScreen("quiz");
  renderQuestion();
}

/* Question screen */
function renderQuestion() {
  const q = state.questions[state.index];
  const isLast = state.index === state.questions.length - 1;
  state.selected = null;

  els.progressText.textContent = `Question ${state.index + 1} of ${state.questions.length}`;
  els.progressBar.style.width = `${(state.index / state.questions.length) * 100}%`;
  els.questionText.textContent = q.question;
  els.nextBtn.textContent = isLast ? "Finish" : "Next";
  els.nextBtn.disabled = true;

  els.options.innerHTML = "";
  q.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");
    btn.textContent = text;
    btn.addEventListener("click", () => selectOption(i));
    els.options.appendChild(btn);
  });

  startTimer();
}

function selectOption(i) {
  state.selected = i;
  Array.from(els.options.children).forEach((btn, idx) => {
    const active = idx === i;
    btn.classList.toggle("selected", active);
    btn.setAttribute("aria-checked", String(active));
  });
  els.nextBtn.disabled = false;
}

function goNext() {
  stopTimer();
  state.answers.push(state.selected);
  if (state.index === state.questions.length - 1) {
    showResults();
  } else {
    state.index += 1;
    renderQuestion();
  }
}

/* Timer */
function startTimer() {
  stopTimer();
  state.timeLeft = TIME_PER_QUESTION;
  updateTimerUI();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    updateTimerUI();
    if (state.timeLeft <= 0) goNext();
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

function updateTimerUI() {
  els.timeLeft.textContent = state.timeLeft;
  els.timerBar.style.width = `${(state.timeLeft / TIME_PER_QUESTION) * 100}%`;
}

/* Results */
function getFeedback(percent) {
  if (percent >= 80) return "Excellent work. You know this topic well.";
  if (percent >= 50) return "Good effort. Review the missed questions and try again.";
  return "Keep practicing. Check the review below and retake the quiz.";
}

function showResults() {
  const total = state.questions.length;
  const score = state.questions.filter((q, i) => state.answers[i] === q.answer).length;
  const percent = Math.round((score / total) * 100);

  els.scoreText.textContent = `${score} / ${total} (${percent}%)`;
  els.feedbackText.textContent = getFeedback(percent);
  renderReview();
  showScreen("result");
}

function renderReview() {
  els.reviewList.innerHTML = "";
  state.questions.forEach((q, i) => {
    const picked = state.answers[i];
    const correct = picked === q.answer;
    const li = document.createElement("li");
    li.className = correct ? "correct" : "wrong";

    const title = document.createElement("p");
    title.className = "q";
    title.textContent = `${i + 1}. ${q.question}`;

    const detail = document.createElement("p");
    detail.className = "a";
    const yourAnswer = picked === null ? "No answer (time ran out)" : q.options[picked];
    detail.textContent = correct
      ? `Your answer: ${yourAnswer}`
      : `Your answer: ${yourAnswer}. Correct answer: ${q.options[q.answer]}`;

    li.append(title, detail);
    els.reviewList.appendChild(li);
  });
}

/* Events */
els.nextBtn.addEventListener("click", goNext);
els.restartBtn.addEventListener("click", () => showScreen("start"));

renderCategories();
showScreen("start");