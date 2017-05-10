'use strict';

var questions = ['Do I know how to ride motorcycles?', 'Is my favorite genre of music pop?', 'Am I an avid gamer?', 'Do I plan on trying my luck in amerture MMA in the future?', 'Have I ever been to another country?'];
var answers = ['yes', 'no', 'yes', 'yes', 'no'];
var userResponse = [ask];

var user = prompt('Hi! What\'s your name?');
console.log('User:', user);
alert('Nice to meet you ' + user + ', I hope you like guessing games.');

for(var i = 0; i < questions.length; i++){
  var ask = prompt(questions[i]).toLowerCase();
  console.log('User Answer ' + [i+1] +':' + ask);
  if(ask === answers[i]){
    alert('Correct!');
  }else{
    alert('Incorrect!');
  }
}

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
      alert('Better luck next time!');
      break;
    }
  }

  console.log('Number of attempts:', counter);









'Name one of my favorite metal bands.'
