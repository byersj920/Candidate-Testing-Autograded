const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let canidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let canidateAnswer ='';

//TODO: Variables for Part 2
let questions =[
  'Who was the first American woman in space? ', 
  'True or false: 5 kilometer == 5000 meters? ', 
  '(5 + 3)/2 * 10 = ? ', 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "];
let canidateAnswers = [];
let correctAnswers=[
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  "3"];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  canidateName = input.question('Welcome to the canidate quiz! Please enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//canidateAnswer = input.question(`${question}`);
for (i = 0; i < questions.length; i++){
  canidateAnswers.push(input.question(`${questions[i]}`));
}
}
function gradeQuiz(canidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (i = 0; i < canidateAnswers.length; i++){
  console.log(`For question ${i+1}, you answered '${canidateAnswers[i]}'. The correct answer was ${correctAnswers[i]}.`);
}

 //TODO 3.2 use this variable to calculate the candidates score.
  let caseDeSensitive = function(value){
    let newValue;
    if (typeof value === 'string'){
      newValue = value.toLowerCase();
    } else {
      newValue = value;
    }
    return newValue;
  };

canidateAnswers = canidateAnswers.map(caseDeSensitive);
correctAnswers = correctAnswers.map(caseDeSensitive);
let numberCorrect = 0;

for (let i = 0; i < canidateAnswers.length; i++){
  if(canidateAnswers[i] === correctAnswers[i]){
    numberCorrect += 1;
  }
}
let grade = (numberCorrect/questions.length)*100
if (grade >= 80){
  console.log(`${grade/100*5} of your answers were correct, meaning you scored ${grade}%. You passed! Congrats!!! You should get like a trophy or something.`);
} else{
  console.log(`${grade/100*5} of your answers were correct, meaning you scored ${grade}%. You did not pass. Please study up and try agian later.`);
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hi, ${canidateName}! Nice to meet'cha. Let's get started with the quiz. There will be five questions. Good luck!`);
  askQuestion();
  gradeQuiz(this.canidateAnswers);
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