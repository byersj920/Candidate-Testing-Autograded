const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let canidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let canidateAnswer ='';

//TODO: Variables for Part 2
let questions;
let canidateAnswers;
let correctAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  canidateName = input.question('Welcome to the canidate quiz! Please enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
canidateAnswer = input.question(`${question}`);
}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

if (canidateAnswer.toLowerCase().trim() === 'sally ride'){
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
  gradeQuiz();
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: canidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: canidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  canidateAnswers: canidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};