const questions = [
    {
      question: "Which programming language is known for its simplicity and readability?",
      answers: [
        { text: "Java", correct: false },
        { text: "C++", correct: false },
        { text: "Ruby", correct: false },
        { text: "Python", correct: true }
      ]
    },
    {
      question: "What is the primary function of a firewall in network security?",
      answers: [
        { text: "Enhancing internet speed", correct: false },
        { text: "Protecting against unauthorized access", correct: true },
        { text: "Filtering spam emails", correct: false },
        { text: "Encrypting files", correct: false }
      ]
    },
    {
      question: "What is the time complexity of quicksort algorithm in the best case?",
      answers: [
        { text: "O(n^2)", correct: false },
        { text: "O(n log n)", correct: true },
        { text: "O(log n)", correct: false },
        { text: "O(n)", correct: false }
      ]
    },
    {
      question: "What is the worst-case time complexity of bubble sort algorithm?",
      answers: [
        { text: "O(n log n)", correct: false },
        { text: "O(log n)", correct: false },
        { text: "O(n)", correct: false },
        { text: "O(n^2)", correct: true }
      ]
    },
    {
      question: "What is the main advantage of using a hash table?",
      answers: [
        { text: "Fast average-case time complexity for insertions, deletions, and lookups", correct: true },
        { text: "Low space complexity", correct: false },
        { text: "Deterministic time complexity for all operations", correct: false },
        { text: "Ease of implementation", correct: false }
      ]
    },
    {
      question: "What is the Laplace transform of a constant function?",
      answers: [
        { text: "Zero", correct: false },
        { text: "Infinity", correct: false },
        { text: "One", correct: false },
        { text: "Undefined", correct: true }
      ]
    },
    {
      question: "What is the solution to the differential equation dy/dx = y?",
      answers: [
        { text: "e^x", correct: true },
        { text: "sin(x)", correct: false },
        { text: "cos(x)", correct: false },
        { text: "tan(x)", correct: false }
      ]
    },
    {
      question: "What is the Laplace transform of the sine function?",
      answers: [
        { text: "1/(s^2 + 1)", correct: true },
        { text: "s/(s^2 + 1)", correct: false },
        { text: "s^2/(s^2 + 1)", correct: false },
        { text: "cos(s)", correct: false }
      ]
    },
    {
      question: "What is the purpose of version control systems like Git?",
      answers: [
        { text: "To track changes to code and collaborate with others", correct: true },
        { text: "To compile code into executable programs", correct: false },
        { text: "To test code for bugs", correct: false },
        { text: "To optimize code for performance", correct: false }
      ]
    },
    {
      question: "What is the purpose of UML (Unified Modeling Language) diagrams in software engineering?",
      answers: [
        { text: "To document code comments and annotations", correct: false },
        { text: "To visually represent the design and structure of a software system", correct: true },
        { text: "To automate the testing process", correct: false },
        { text: "To generate executable code from diagrams", correct: false }
      ]
    },
    {
      question: "Which of the following is used to render 3D graphics in real-time?",
      answers: [
        { text: "OpenGL", correct: true },
        { text: "Adobe Photoshop", correct: false },
        { text: "Microsoft Excel", correct: false },
        { text: "Autodesk Maya", correct: false }
      ]
    },
    {
      question: "What does GPU stand for?",
      answers: [
        { text: "Graphics Processing Unit", correct: true },
        { text: "Graphical Performance Unit", correct: false },
        { text: "General Processing Unit", correct: false },
        { text: "Geometric Processing Unit", correct: false }
      ]
    },
    {
      question: "What is texture mapping?",
      answers: [
        { text: "A technique for applying images or patterns to the surface of 3D models", correct: true },
        { text: "A method for generating procedural textures", correct: false },
        { text: "A process for optimizing polygon counts in a model", correct: false },
        { text: "An algorithm for determining visible surfaces in a scene", correct: false }
      ]
    },
    {
      question: "What is the purpose of HTML?",
      answers: [
        { text: "To define the structure of a web page", correct: true },
        { text: "To style the appearance of a web page", correct: false },
        { text: "To add interactivity to a web page", correct: false },
        { text: "To perform server-side processing", correct: false }
      ]
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Sheets", correct: false },
        { text: "Computer Style Sheets", correct: false },
        { text: "Cascading Script Sheets", correct: false }
      ]
    },
    {
      question: "What is the purpose of a CSS framework?",
      answers: [
        { text: "To provide pre-written CSS styles and layouts for faster development", correct: true },
        { text: "To optimize CSS code for performance", correct: false },
        { text: "To automate the testing of CSS styles", correct: false },
        { text: "To generate HTML code from CSS styles", correct: false }
      ]
    }
  ];
  
  export default questions;
  