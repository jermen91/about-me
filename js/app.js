'use strict';

alert('Welcome! Before moving any further lets play a guessing game');
alert('I\'m going to ask you 5 questions about myself and then you have to answer with yes or no');

var wrongAnswer = ('That\'s incorrect. You lost! Here take a look at my awesome web design before you leave. Bye!')

var firstAnswer = prompt('Got it?');
var shortAnswer = firstAnswer.toLowerCase();

if(shortAnswer === 'yes') {
  alert('Awesome! Well I guess that question counted so 4 more to go.');
} else {
 var wrongAnswer = alert('Incorrect.');
}

var secondAnswer = prompt('Am I a male?');
var secondShortAnswer = secondAnswer.toLowerCase();

if(secondShortAnswer === 'yes') {
  alert('Correct! you\'re too good!');
} else {
  alert(wrongAnswer);
}

var thirdAnswer = prompt('Will I pass the first week of 201?');
var thirdShortAnswer = thirdAnswer.toLowerCase();

if(thirdShortAnswer === 'yes') {
  alert('Thanks for believing in me!');
} else {
  alert(wrongAnswer);
}

var fourthAnswer = prompt('Is my hair black?');
var fourthShortAnswer = fourthAnswer.toLowerCase();

if(fourthShortAnswer = 'yes') {
  alert('correct! OK get ready for the final question.');
} else{
  alert(wrongAnswer);
}

var lastQuestion = prompt('Did I make the best website on earth?');
var shortLastQuestion = lastQuestion.toLowerCase();

if(shortLastQuestion === 'yes') {
  alert('How did you know! For getting the most important question right, I\'ll let you witness the best website on earth. Here it is!');
} else {
  alert('Incorrect');
}


