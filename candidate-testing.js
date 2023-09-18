const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';

console.log(typeof(question));

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;

let nameInquiry = input.question('Welcome to the canidate quiz! Please enter your name:');


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let canidateName = input.question('Welcome to the canidate quiz! Please enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log(question);
let canidateAnswer = input.question('');
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

if (questionOne.toLowerCase().trim() === 'sally ride'){
  console.log('Correct!');
} else {
  console.log(`Incorrect. The correct answer was "Sally Ride."`);
}

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hi, ${canidateName}! Nice to meet'cha. Let's get started with the quiz. There will be five questions in this quiz. Good luck!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};