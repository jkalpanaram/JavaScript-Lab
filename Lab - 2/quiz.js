function Quiz(questions) {
    this.score = 0;
    this.questions = questions
    this.questionIndex = 0
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices= choices;
    this.answer = answer;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length
}

let questions = [

    new Question("Which of the following is not a primitive data type in JavaScript?", ["Number", "String", "Boolean", "Object"], "Object"),

    new Question("What does the “typeof” operator do in JavaScript?", ["Returns the data type of a variable", "Checks if a variable is defined", "Assigns a value to a variable", "Concatenates two strings"], "Returns the data type of a variable"),

    new Question("Which of the following is not a comparison operator in JavaScript?", ["==", "===", "!=", "=<"], "=<"),

    new Question("What does the “NaN” value represent in JavaScript?", ["Not a Number", "Null Value", "Undefined Value", "Boolean Value"], "Not a Number"),

    new Question("What is the correct way to declare a variable in JavaScript?", ["var x = 5;", "variable x = 5;", "x = 5;", " let x = 5;"], " let x = 5;"),

    new Question("What does the “this” keyword refer to in JavaScript?", [" The current function", "The global object", "The object that the function belongs to", "The parent object of the current object"], "The object that the function belongs to"),

    new Question("What does the “forEach” method do in JavaScript?", ["Adds a new element to the end of an array ", "Removes an element from the beginning of an array ", "Executes a function once for each element in an array ", "Reverses the order of the elements in an array"], "Executes a function once for each element in an array "),

    new Question("What is the correct syntax for a “for” loop in JavaScript'?", ["for (var i = 0; i < 5; i++)", "for (i = 0; i < 5; i++)", "for (var i = 5; i > 0; i–)", "for (i = 5; i > 0; i–)"], "for (var i = 0; i < 5; i++)"),

    new Question("What is the difference between “==” and “===” operators in JavaScript?", ["They are interchangeable", "“==” performs a strict comparison, while “===” performs a loose comparison", " “===” performs a strict comparison, while “==” performs a loose comparison", "They both perform the same type of comparison"], "c) “===” performs a strict comparison, while “==” performs a loose comparison"),

    new Question("What is the difference between “let” and “const” keywords in JavaScript?", ["They are interchangeable", "“let” variables cannot be reassigned, while “const” variables can", "“const” variables cannot be reassigned, while “let” variables can", "“let” and “const” both refer to constant variables "], "“const” variables cannot be reassigned, while “let” variables can")

]
Quiz.prototype.getQuestionByIndex = function() {
return this.questions[this.questionIndex]
}
Question.prototype.isCorrectAnswer= function(choice) {
    return this.answer === choice
}
Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
let quiz = new Quiz(questions);
function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        let questionText = document.getElementById("question")
        questionText.innerHTML= quiz.getQuestionByIndex().text
        let choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice"+i)
            element.innerHTML = choices[i];
            handleOptionButton("btn"+i, choices[i])
        }
        showProgress();
    }
}

function handleOptionButton(id, choice) {
let btn = document.getElementById(id)
btn.onclick= function() {
    quiz.checkOptionWithAnswer(choice);
    loadQuestions();
}
};
function showProgress() {
let currntQues = quiz.questionIndex +1;
let elem = document.getElementById("progress")
elem.innerHTML = `Question ${currntQues} of ${quiz.questions.length}`
}
function showScores() {
let gameEnded = "<h1>Result</h1>"
gameEnded += "<h2>Your scores :" + quiz.score + " and Percentage is "+ (quiz.score/questions.length*100) +"</h2>";
document.getElementById("quiz").innerHTML = gameEnded
}
loadQuestions();