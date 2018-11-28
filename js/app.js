'use strict';

alert('Welcome! Before moving any further lets play a guessing game');
alert('I\'m going to ask you  5 questions about myself and then you have to answer with yes or no');

var wrongAnswer = ('That\'s incorrect. You lost! Here take a look at my awesome web design before you leave. Bye!')

var firstAnswer = prompt('Got it?');

if(firstAnswer === 'yes') {
  alert('Awesome! Well I guess that question counted so 4 more to go.');
} else {
 var wrongAnswer = alert('OK well take a look at my awesome web design before you. Bye!');
}

var secondAnswer = prompt('Am I a male or female?');

if(secondAnswer === 'male') {
  alert('Correct! you\'re too good!');
} else {
  alert(wrongAnswer);
}

var thirdAnswer = prompt('Will I pass the first week of 201?');

if(thirdAnswer === 'yes') {
  alert('Thanks for believing in me!');
} else {
  alert(wrongAnswer);
}

var fourthAnswer = prompt('Is my hair black?');

if(fourthAnswer = 'yes') {
  alert('correct! OK get ready for the final question.');
} else{
  alert(wrongAnswer);
}

var lastQuestion = prompt('Did I make the best website on earth?');

if(lastQuestion === 'yes') {
  alert('How did you know! For getting all the questions right, I\'ll let you witness the best website on eath. Here it is!');
} else {
  alert(wrongAnswer);
}


