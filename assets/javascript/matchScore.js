/*
Bicycle Collector

Assignment 4 - html, javascript, and jquery game 
              use buttons assignment random values to attain a randomly selected score 
               a bit of bootstrap style added

Al Curry  February 12, 2018

GWU full stack development program  

this module invoked by index.html 


pseudo code for this module: 

start Game
click on 1 of 4 Buttons 
   increment userScore by the value for that Button
   If userScore > goalScore
       lose
   if userScore = goalScore
       win
    restart game
  
start game:
    set win and lose to 0
    call restart game 

restart game:
   generate random goalScore from 19 - 120
    generate array of 4 button values 1 - 12
    set userScore to 0
   
  */

$(document).ready(function () {
     
    var win = 0, lose = 0;
    var goalScore = 0
    var userScore = 0;
    var btnValues = [];
    
    function startGame() {

        win = 0;
        lose = 0;
        // document.getElementById("overText").innerHTML = endText;
        restartGame();
    }

    function restartGame() {

        // generate goalScore 19 - 120 and display it with Jquery
        goalScore = Math.floor(Math.random() * 101) + 19;
        $("#goalScore").html(goalScore);
        userScore = 0;
        $("#userScore").html("");

       // generate 4 button values in 1 - 12 range
       // rather than introduce another index var, this btnValue array will use indices 1 - 4 
       // use jquery to set "hidden" value to random value 
        for (var i = 1; i < 5; i++) {
            var buttStr = "";
            btnValues[i] = Math.floor(Math.random() * 11) + 1;  
            buttStr = "#button" + i;
            console.log(buttStr, btnValues[i]);
            $(buttStr).attr("value",btnValues[i]);
        }

    }

    startGame();

/*     click on 1 of 4 Buttons 
    increment userScore by the value for that Button
    If userScore > goalScore
        lose
    if userScore = goalScore
        win
     restart game */
    $(".btn").click(function () {

        var buttValue = $(this).attr("value");
        console.log(buttValue);
        userScore += parseInt(buttValue) ;
        // display updated userScore value
        $("#userScore").html(userScore);
        $("#gameOver").empty();

        if (userScore > goalScore) {
            // lose
            lose++;
            $("#lose").html(lose);
            $("#gameOver").html("you lose - too many bikes");
            restartGame();
        }
        if (userScore === goalScore) {
            // win
            win++;
            $("#win").html(win);
            $("#gameOver").html("you win - the perfect number of  bikes");
            restartGame();
        }

    });

});

    
  var alphaIdx = 0;
  var wins = 0;
  var losses = 0;
  var alphaStr = "abcdefghijklmnopqrstuvwxyz";
  var gCnt = 9;
  var guessList = [];
  var endText = "";
  var gameCount = 0;
  var reset = false;


  /* random number  0 - 25 */
/*   alphaIdx = getAlphaIdx();
  console.log("P random index : " + alphaIdx + " alpha char: " + alphaStr[alphaIdx]);

  document.onkeyup = function (event) { */

    /* Reset, after first game */
    /*  occurs on first key press after win or loss */
      
  /*   if (gameCount > 0 && reset === true) {
       gCnt = 9
       guessList = [];
       document.getElementById("left").innerHTML = gCnt;
       document.getElementById("guessList").innerHTML = guessList;
       document.getElementById("overText").innerHTML = "";
       alphaIdx = getAlphaIdx();
       console.log("New game RND idx : " + alphaIdx + " alpha char: " + alphaStr[alphaIdx]);
       reset = false;
    }
    document.getElementById("left").innerHTML = --gCnt;
 
      var guess = event.key.toLowerCase();
      console.log("guess = " + guess);

      if (guess === alphaStr[alphaIdx]) {

        document.getElementById("wins").innerHTML = ++wins;
        gCnt = 0;
        document.getElementById("left").innerHTML = gCnt;
        endText = guess + " wins"
        gameOver();

      } else {
         if (gCnt === 0) {

          document.getElementById("losses").innerHTML = ++losses;
          endText = "no more guesses - winner was " + alphaArray[alphaIdx];
          gameOver();
         }
      }

      guessList.push(guess);

      document.getElementById("guessList").innerHTML = guessList;

      console.log(" wins: " + wins + " losses: " + losses);

  }; */

