var myAge = 29;

var willPlay = prompt('Do ya want to play a guessing game ' +
'about yours truly? Answer "yes" or "no."' +
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

    var youngerThanTwenty = prompt('Do you think I\'m younger than 20?' +
    ' Answer yes/y or no/n.');
    console.log('User\'s guess whether I\'m younger than 20:', youngerThanTwenty);
    if (youngerThanTwenty.toLowerCase() === 'yes' || youngerThanTwenty.toLowerCase() === 'y') {
        alert('I\'m older. Try again.');
        console.log('User guessed yes, younger than 20:', youngerThanTwenty);
    } else if (youngerThanTwenty.toLowerCase() === 'no' || youngerThanTwenty.toLowerCase() === 'n') {
        alert('You\'re right, I\'m older. Here is another question.');
        console.log('User guessed no, older than 20:', youngerThanTwenty);
    } else {
        alert('Please answer yes/y or no/n. Try another question.'); // Gotta handle invalid user input better
        console.log('User\'s answer was invalid:', youngerThanTwenty);
    }

    var youngerThanTwentyFive = prompt('Do you think I\'m younger than 25?' +
    ' Answer yes/y or no/n.');
    if (youngerThanTwentyFive.toLowerCase() === 'yes' || youngerThanTwentyFive.toLowerCase() === 'y') {
        alert('I\'m actually older. Try again.');
        console.log('User guessed yes, younger than 25:', youngerThanTwentyFive);
    } else if (youngerThanTwentyFive.toLowerCase() === 'no' || youngerThanTwentyFive.toLowerCase() === 'n') {
        alert('You\'re right, I\'m actually older. Here is another question.');
        console.log('User guessed no, older than 25:', youngerThanTwentyFive);
    } else {
        alert('Please answer yes/y or no/n. Here\'s another question.'); // Gotta handle invalid user input better
        console.log('User\'s answer was invalid:', youngerThanTwentyFive);
    }

    var youngerThanThirty = prompt('Think I\'m younger than 30?' + 
    ' Answer yes/y or no/n.');
    if (youngerThanThirty.toLowerCase() === 'no' || youngerThanThirty.toLowerCase() === 'n') {
        alert('Actually, I\'m not quite that old!');
        console.log('User guessed no, not younger than 30:', youngerThanThirty);
    } else if (youngerThanThirty.toLowerCase() === 'yes' || youngerThanThirty.toLowerCase() === 'y') {
            alert('You\'re right, I\'m younger.');
            console.log('User guessed yes, younger than 30:', youngerThanTwentyFive);
    } else {
        alert('Please answer yes/y or no/n. One last question.'); // Gotta handle invalid user input better
        console.log('User\'s answer was invalid:', youngerThanThirty);
    }

    var ageOptions = [26, 27, 28];
    var multipleChoiceGuess = prompt('Think my age is one of the following? ' +
    ageOptions[0].toString() + ', ' + ageOptions[1].toString() + ', ' +
    ageOptions[2].toString() + ' (Answer yes/y or no/n.)');
    if (multipleChoiceGuess.toLowerCase() === 'yes' || multipleChoiceGuess.toLowerCase() === 'y') {
        alert('Nope! I\'m actually ' + myAge);
    } else if (multipleChoiceGuess.toLowerCase() === 'no' || multipleChoiceGuess.toLowerCase() === 'n') {
        alert('Correct, I\'m ' + myAge + '!');
    } else {
        alert('Sorry, invalid answer.');
    }

    alert('Thanks for playing!');
    console.log('Game over!');

}