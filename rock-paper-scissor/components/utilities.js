import {CHOICES} from '../constants';

let result;
let count = 0,countWin=0,countLose=0,countTie=0;

var getCount = () =>{
  count ++;
  return count;
};

var getCountWin = () =>{
  if(result ==='Victory!'){
    countWin++;}
    return countWin;
};

var getCountLose = () =>{
  if(result ==='Defeat!'){
    countLose++;}
    return countLose;
};

var getCountTie = () =>{
  if(result ==='Tie game!'){
    countTie++;}
    return countTie;
};

const randomComputerChoice = () =>
 CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = (userChoice,computerChoice) => {
   if (userChoice === 'rock') {
     result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
   }
   if (userChoice === 'paper') {
     result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
   }
   if (userChoice === 'scissors') {
     result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
   }
 
   if (userChoice === computerChoice) result = 'Tie game!';
   return result;
 };

 export{randomComputerChoice,getRoundOutcome,getCount,getCountLose,getCountWin,getCountTie};