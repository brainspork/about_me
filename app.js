'use strict';

//user info
var user = prompt('Hi! What\'s your name?');
console.log('User:', user);
alert('Nice to meet you ' + user + '. My name is Anthony. I hope you like guessing games. Answer the next five questions with yes or no');
var score = 0;

//questions 1-5
var questions = ['Do I know how to ride motorcycles?', 'Is my favorite genre of music pop?', 'Am I an avid gamer?', 'Do I plan on trying my luck in amerture MMA in the future?', 'Have I ever been to another country?'];
var answers = ['yes', 'no', 'yes', 'yes', 'no'];
var answersAlt = ['y', 'n', 'y', 'y', 'n'];

for(var i = 0; i < questions.length; i++){
  var ask = prompt(questions[i]).toLowerCase();
  console.log('User Answer ' + [i+1] +':' + ask);
  if(ask === answers[i]|| ask === answersAlt[i]){
    alert('Correct!');
    score++;
  }else{
    alert('Incorrect!');
  }
  console.log(ask);
}



//random number guessing
var num = Math.floor((Math.random()*10)+1);
var counter = 1;
var userNum;
console.log('Random number:', num);

while(userNum !== num){
  userNum = parseInt(prompt('I\'m thinking of a number between 1 and 10. What is it?'));
  if(userNum < num){
    alert('You guessed to low!');
    counter++;
  }else if(userNum > num){
    alert('You guessed to high!');
    counter++;
  }else if(userNum === NaN || userNum === null){
    alert('Please enter number.');
    counter++;
  }
  if(counter > 4){
    alert('Better luck next time! The number was', num);
    break;
  }
}
if(userNum === num){
  alert('You got it!');
  score++;
  console.log('Number of attempts:', counter);
}


//Question 7 multiple choice
var metal = ['iron maiden', 'judas priest','metallica','death'];
var userMetal;
var counterTwo = 0;
var flag;

while(counterTwo < 7){
  userMetal = prompt('Name one of my favorite metal bands.').toLowerCase();
  for(var j = 0; j < metal.length; j++){
    if(userMetal === metal[j]){
      flag = true;
    }
    console.log('Current band:', metal[j]);
  }
  if (!flag){
    alert('Nope! Try again.');
    console.log('User Answer:', userMetal);
    counterTwo++;
  }else{
    alert('You got one! The choices were: Iron Maiden, Judas Priest, Metallica, Death');
    counterTwo+=7;
    score++;
  }
    if(counterTwo === 6){
      alert('Better luck next time! The choices were: Iron Maiden, Judas Priest, Metallica, Death');
      break;
  }
}
console.log('Attempts:', counterTwo);


alert('Congradulations '+user+'! You finished! You got '+score+' out of 7!');
