'use strict';

var motorcycle= prompt('Do I know how to ride motorcycles? Yes or No.');
console.log('Motorcycle:', motorcycle);
if(motorcycle.toLowerCase() === 'yes' || motorcycle.toLowerCase() === 'y'){
  alert('Correct!', motorcycle);
}else{
  alert('Wrong!');
}

var age= prompt('Am I over 30 years old? Yes or No.');
console.log('Age:', age);
if(age.toLowerCase() === 'yes' || age.toLowerCase() === 'y'){
  alert('Wrong!');
}else{
  alert('Correct!');
}

var pop= prompt('Do I like pop music? Yes or No.');
console.log('Pop Music:', pop);
if(pop.toLowerCase() === 'yes' || pop.toLowerCase() === 'y'){
  alert('Wrong!');
}else{
  alert('Correct');
}

var games=prompt('Do I like playing videogames? Yes or No.');
console.log('Videogames:', games);
if(games.toLowerCase() === 'yes' || games.toLowerCase() === 'y'){
  alert('Corret!');
}else{
  alert('Wrong!');
}

var mma=prompt('Do I enjoy MMA? Yes or No.');
console.log('MMA:', mma);
if(mma.toLowerCase() === 'yes' || mma.toLowerCase() === 'y'){
  alert('Correct!');
}else{
  alert('Wrong!');
}
