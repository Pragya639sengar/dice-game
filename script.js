var randomNumber1=Math.floor(Math.random()*6)+1; //random no. for dice1
//var randomDiceImg= "dice" + randomNumber1 + ".png" //dice1.png - dice6.png string

if(randomNumber1===1){
  document.querySelector("img.img1").setAttribute("src","dice1.png");
}
else if(randomNumber1===2){
  document.querySelector("img.img1").setAttribute("src","dice2.png");
}
else if(randomNumber1===3){
  document.querySelector("img.img1").setAttribute("src","dice3.png");
}
else if(randomNumber1===4){
  document.querySelector("img.img1").setAttribute("src","dice4.png");
}
else if(randomNumber1===5){
  document.querySelector("img.img1").setAttribute("src","dice5.png");
}
else{
  document.querySelector("img.img1").setAttribute("src","dice6.png");
}

var randomNumber2=Math.floor(Math.random()*6)+1; //random no. for dice2

if(randomNumber2===1){
  document.querySelector("img.img2").setAttribute("src","dice1.png");
}
else if(randomNumber2===2){
  document.querySelector("img.img2").setAttribute("src","dice2.png");
}
else if(randomNumber2===3){
  document.querySelector("img.img2").setAttribute("src","dice3.png");
}
else if(randomNumber2===4){
  document.querySelector("img.img2").setAttribute("src","dice4.png");
}
else if(randomNumber2===5){
  document.querySelector("img.img2").setAttribute("src","dice5.png");
}
else{
  document.querySelector("img.img2").setAttribute("src","dice6.png");
}


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins! &#9971";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw &#10069";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins! &#9971";
}
