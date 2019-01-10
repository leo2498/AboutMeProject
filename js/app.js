'use strict';

var myAge = 29;
var score = 0;
console.log('Score is currently:', score);

var favSubjs = ['German', 'Latin', 'History', 'English lit'];

for (var i = 0; i < favSubjs.length; i++) {
    var bestSubjects = 'bestsubjs' + i;
        console.log('bestsubjs HTML ID incremented:', bestSubjects);
    document.getElementById(bestSubjects).innerHTML = favSubjs[i] + '<br>';
        console.log('Fav subjects value:', favSubjs[i]);
}

// Y/N Question #1
console.log('Y/N Question #1');

function question1() {

    var willGiveName = prompt('Are you willing to tell me your name? ' +
    'Please answer yes or no (y or n are also acceptable).');
        console.log('Is user willing to give name?', willGiveName);
        if (willGiveName.toLowerCase() === 'yes' || willGiveName.toLowerCase() === 'y') {
            alert('Ok, thanks!');
            
            // var realName = prompt('What is your name?');
            // var userName = realName;
            // console.log('User\'s name saved as:', userName);

        } else if (willGiveName.toLowerCase() === 'no' || willGiveName.toLowerCase() === 'n') {
            alert('Ok, no problem!!');

            // If user won't give name, create a variable that saves a default anonymous
            // user name to use later when I show the tally of user's correct answers.
            // var fakeName = 'Esteemed User';
            // var userName = fakeName;
            // console.log('User name saved as:', userName);

        } else {
            alert('Please answer yes/y or no/n in the future.');
        }
}

 question1();
    
// Y/N Preliminary Question 
console.log('Y/N Question #2');
var willPlay = prompt('Do ya want to try to guess my age?' +
' Answer "yes" or "no."' +
' (The answers "y" or "n" are also acceptable.)' );
console.log('User wants to play:', willPlay);
if (willPlay.toLowerCase() === 'yes' || willPlay.toLowerCase() === 'y') {
    alert('Ok, let\'s play!');
} else if (willPlay.toLowerCase() === 'no' || willPlay.toLowerCase() === 'n') {
    alert('Ok, no offense taken! ;)');
} else {
    alert('Sorry, the answer is not valid. Please answer yes/y or no/n.');
}

if (willPlay.toLowerCase() === 'yes' || willPlay.toLowerCase() === 'y') { 
// ^ Is there a more concise way to check if user has answered yes?
    

    // Y/N Question #2
    console.log('Y/N Question #2');
    function question2() {
        var youngerThanTwenty = prompt('Do you think I\'m younger than 20?' +
        ' Answer yes/y or no/n.');
        console.log('User\'s guess whether I\'m younger than 20:', youngerThanTwenty);
        if (youngerThanTwenty.toLowerCase() === 'yes' || youngerThanTwenty.toLowerCase() === 'y') {
            alert('I\'m older. Try again.');
            console.log('User guessed yes, younger than 20:', youngerThanTwenty);
        } else if (youngerThanTwenty.toLowerCase() === 'no' || youngerThanTwenty.toLowerCase() === 'n') {
            alert('You\'re right, I\'m older. Here is another question.');
            console.log('User guessed no, older than 20:', youngerThanTwenty);
            score++;
            console.log('Score is currently:', score);
        } else {
            alert('Please answer yes/y or no/n. Try another question.'); // Gotta handle invalid user input better
            console.log('User\'s answer was invalid:', youngerThanTwenty);
        }
    }

    question2();

    function question3() {

        // Y/N Question #3
        console.log('Y/N Question #3');
        var youngerThanTwentyFive = prompt('Do you think I\'m younger than 25?' +
        ' Answer yes/y or no/n.');
        if (youngerThanTwentyFive.toLowerCase() === 'yes' || youngerThanTwentyFive.toLowerCase() === 'y') {
            alert('I\'m actually older. Try again.');
            console.log('User guessed yes, younger than 25:', youngerThanTwentyFive);
        } else if (youngerThanTwentyFive.toLowerCase() === 'no' || youngerThanTwentyFive.toLowerCase() === 'n') {
            alert('You\'re right, I\'m actually older. Here is another question.');
            console.log('User guessed no, older than 25:', youngerThanTwentyFive);
            score++;
            console.log('Score is currently:', score);
        } else {
            alert('Please answer yes/y or no/n. Here\'s another question.'); // Gotta handle invalid user input better
            console.log('User\'s answer was invalid:', youngerThanTwentyFive);
        }
    }

    question3();

    function question4(){

        // Y/N Question #4
        console.log('Y/N Question #4');
        var youngerThanThirty = prompt('Think I\'m younger than 30?' + 
        ' Answer yes/y or no/n.');
        if (youngerThanThirty.toLowerCase() === 'no' || youngerThanThirty.toLowerCase() === 'n') {
            alert('Actually, I\'m not quite that old!');
            console.log('User guessed no, not younger than 30:', youngerThanThirty);
        } else if (youngerThanThirty.toLowerCase() === 'yes' || youngerThanThirty.toLowerCase() === 'y') {
                alert('You\'re right, I\'m younger.');
                console.log('User guessed yes, younger than 30:', youngerThanThirty);
                score++;
                console.log('Score is currently:', score);
        } else {
            alert('Please answer yes/y or no/n. One last question.'); // Gotta handle invalid user input better
            console.log('User\'s answer was invalid:', youngerThanThirty);
        }

    }

    question4();

    //  Y/N question #5
    console.log('Y/N question #5');
    function question5() {    

        var ageOptions = [26, 27, 28];
        var multipleChoiceGuess = prompt('Think my age is one of the following? ' +
        ageOptions[0].toString() + ', ' + ageOptions[1].toString() + ', ' +
        ageOptions[2].toString() + ' (Answer yes/y or no/n.)');
        if (multipleChoiceGuess.toLowerCase() === 'yes' || multipleChoiceGuess.toLowerCase() === 'y') {
            alert('Nope! I\'m actually ' + myAge);
        } else if (multipleChoiceGuess.toLowerCase() === 'no' || multipleChoiceGuess.toLowerCase() === 'n') {
            alert('Correct, I\'m ' + myAge + '!');
            score++;
            console.log('Score is currently:', score);
        } else {
            alert('Sorry, invalid answer.');
        }
    }
    question5();

        alert('Thanks for playing!');
        console.log('Game over!');
}


// Question #6
console.log('Question #6');
function question6 () {

    var myFavNum = 7;
    for (var i = 0; i < 4; i++) {
        var userNumGuess = prompt('Guess what my favorite number is!');
        console.log('User\'s guess', userNumGuess);
        var numGuessAsNumber = parseInt(userNumGuess);
        console.log(numGuessAsNumber);

        if (numGuessAsNumber === myFavNum) {
            alert('Correct answer! Good guess!');
            score++;
            console.log('Score is currently:', score);
            break;
        } else {
            if (numGuessAsNumber < myFavNum) {
                console.log('User guessed too low');
                // Tell user too low
                alert('Too low!');
            } else if (numGuessAsNumber > myFavNum) {
                console.log('User guessed too high');
                // Tell user too high
                alert('Too high!');
            } else {
                console.log('User gave invalid input');
                // Tell user input submitted was invalid and how to submit right input
                alert('Answer is invalid. Please enter a number.');
            }
        }

        if (i === (4 - 1)) {
            alert('You are out of guesses!');
        }
    }
}
question6();

// Question #7
console.log('Question #7');
function question7() {

    // Declare string array with possible answers
    var rightAnswers = ['Nebraska', 'Michigan', 'South Carolina'];
    var guessesRemaining = 6;

    while (guessesRemaining > 0) {
        var userStateGuess = prompt('Can you guess a state I have lived in besides Washington');
        console.log('User\'s state guess: ', userStateGuess);

        for (var i = 0; i < rightAnswers.length; i++) {    
            if (rightAnswers[i].toUpperCase() === userStateGuess.toUpperCase()) {
                alert('You are correct! The possible correct answers were: ' +
                rightAnswers[0] + ', ' + rightAnswers[1] + ', and ' + rightAnswers[2]);
                guessesRemaining = 0;
                score++;
                console.log('Score is currently:', score);
                break;
            }
        }

        // Inspiration from Billy B. about control
        // flow of the two 'if' statements below
        if (guessesRemaining > 0) { 
            alert('Wrong, try again!');
        }

        guessesRemaining--;
        console.log('Guesses remaining:', guessesRemaining);
            
        if (guessesRemaining === 0) {
            alert('You are out of guesses! The possible correct answers were: ' +
            rightAnswers[0] + ', ' + rightAnswers[1] + ', and ' + rightAnswers[2]);
            // guessesRemaining = 0;
            break;
        }
    }
}
question7();
    // console.log('Confirm final username:', userName);
    console.log('User\'s score was:', score);


    // User won't be able to score all possible
    // points if they opt out of guessing my age.
    // alert(userName + ', your total score was ' + score + ' out of 6 possible points.');
    // console.log('End of program!');
