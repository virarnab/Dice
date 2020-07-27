function montu(){
  alert("Click Ok ---> New Game to play");
}
function kudda(){
  document.querySelectorAll("img")[0].setAttribute("src", "dice6.png");
  document.querySelectorAll("img")[1].setAttribute("src", "dice6.png");
}
function king(){
  $("button").toggle();
}
montu();
function hihi(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw :)";
    }
}

function sound(){
  audio = new Audio("dice.mp3");
  audio.play();
}
function lol(){
  $("h1").text("Enjoy 😁")
}
function rolling(){
  $("h1").text("Rolling....")
}
$("button").click(function(){
  sound();
  rolling();
  setTimeout(hihi,2500);
  king();
  setTimeout(kudda,4000);
  setTimeout(lol,4000);
  setTimeout(montu,5500);
  setTimeout(king,5500);
})
