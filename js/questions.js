const QUESTIONS = {
  "JavaScript": [
    {
      question: "Which keyword declares a block-scoped variable that can be reassigned?",
      options: ["var", "let", "const", "static"],
      answer: 1
    },
    {
      question: "What does typeof null return?",
      options: ["\"null\"", "\"undefined\"", "\"object\"", "\"number\""],
      answer: 2
    },
    {
      question: "Which method adds an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0
    },
    {
      question: "What does === check in JavaScript?",
      options: ["Value only", "Type only", "Value and type", "Reference only"],
      answer: 2
    },
    {
      question: "Which method converts a JSON string into an object?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
      answer: 1
    }
  ],
  "HTML & CSS": [
    {
      question: "Which HTML element is best for the main navigation links?",
      options: ["<div>", "<section>", "<nav>", "<aside>"],
      answer: 2
    },
    {
      question: "Which CSS property controls the space inside an element's border?",
      options: ["margin", "padding", "gap", "outline"],
      answer: 1
    },
    {
      question: "Which CSS layout module is designed for two-dimensional layouts?",
      options: ["Flexbox", "Float", "Grid", "Table"],
      answer: 2
    },
    {
      question: "What does the viewport meta tag help with?",
      options: ["SEO ranking", "Responsive scaling on mobile", "Page caching", "Font loading"],
      answer: 1
    },
    {
      question: "Which attribute provides alternative text for an image?",
      options: ["title", "src", "alt", "label"],
      answer: 2
    }
  ],
  "General Knowledge": [
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: 1
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: 2
    },
    {
      question: "Who wrote the play Romeo and Juliet?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      answer: 1
    }
  ]
};