var myAge = 29

var willPlay = prompt('Do ya want to play a guessing game ' +
'about yours truly? Answer "yes" or "no."' +
' (The answers "y" or "n" are also acceptable.)' );
console.log('User wants to play:', willPlay);
if (willPlay.toLowerCase() === 'yes' || willPlay.toLowerCase() === 'y') {
    alert('Ok, let\'s play!');
} else if (willPlay.toLowerCase() === 'no' || willPlay.toLowerCase() === 'n') {
    alert('Ok, no offense taken! ;)');
} else {
    alert('Please answer yes/y or no/n.');
}

if (willPlay.toLowerCase() === 'yes' || willPlay.toLowerCase() === 'y') { 
    // ^ Is there a more concise way to check if user has answered yes?
    
    /* var willPlay = prompt('Should the guessing game be about me?'); 
        // If not, too bad. Answer again, and this time answer yes
        // otherwise my questions are done.
    */

    var ageGuess = prompt('How old do you think I am?');
    console.log('User guessed I am this old:', ageGuess);
    if (parseInt(ageGuess) <= 20) {
        alert('Too low. Try again!');
        console.log('User guessed too low.');
        var ageGuess = prompt('How old do you think I am?');
        console.log('User\'s attempt at guessing higher:', ageGuess);
    } else if (parseInt(ageGuess) >= 30) {
        alert('Too high. Try again!');
        console.log('User guessed too high.');
        var ageGuess = prompt('How old do you think I am?');
        console.log('User\'s attempt at guessing lower:', ageGuess);
    } else if {
        while (parseInt(ageGuess) < myAge) {
            alert('Too low---try again!');
            console.log('User tried guessing in while loop:', ageGuess);
            var userTryInWhileLoop = 0;
            userTryInWhileLoop++;
            console.log('Number of user\'s attempts in while loop:', userTryInWhileLoop); 
            var ageGuess = prompt('How old do you think I am?');
            console.log('User\'s attempt at getting closer:', ageGuess);
        }
    } else {
        alert('You guessed correctly! On to the next question!');
        console.log('User correctly guessed ' + ageGuess +
        '. My age is ' + myAge);
    }
}

// Question toward end: 'Do you want to play again?'

// Use arrays in one or more questions