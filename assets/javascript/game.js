$(document).ready(function(){
  var letters = [
  'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',
  'z','x','c','v','b','n','m'];

  var wins = 0;
  var losses = 0;
  var guesses = 9;
  var userPastGuess = [];

  var chooseLetter = letters[Math.floor(Math.random() * letters.length)];

  function reset() {
    chooseLetter = letters[Math.floor(Math.random() * letters.length)];
    guesses = 9;
    userGuess = [];
    userPastGuess = [];
    document.getElementById('user-guess').innerHTML = " ";
  }

  
  console.log(chooseLetter)


   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === chooseLetter){
        reset();
        wins++;
        alert("Your a Psychic! You win!")
        console.log(chooseLetter)
    } else {
    if (userPastGuess.indexOf(userGuess) >= 0) {
      alert("Please Choose another Letter.")
      return;
    }    
    userPastGuess.push(userGuess);
    console.log(userPastGuess);


    
    if (guesses > 0) {
        guesses--;
        // letters.push(userGuess);
    }

    if(guesses === 0){
        losses++;
        reset();
        console.log(chooseLetter)
     

    }}
   
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
    document.getElementById('user-guess').innerHTML = userPastGuess.join(', ');
}


});
