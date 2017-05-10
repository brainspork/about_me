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


'I\'m thinking of a number between 1 and 10. What is it?', 'Name one of my favorite metal bands.'
