
//Player 1
var player_1 = Math.random() * 6;
player_1 = Math.floor(player_1) + 1;

//Player 2
var player_2 = Math.random() * 6;
player_2 = Math.floor(player_2) + 1;

//DICE
document.querySelector(".img1").setAttribute("src", "images/dice" + player_1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + player_2 + ".png");


//Player 1 vs Player 2
if(player_1 > player_2){
    document.querySelector("h1").textContent = "Player 1 Wins!!!"
}
else if(player_2 > player_1){
    document.querySelector("h1").textContent = "Player 2 Wins!!!"
}
else{
    document.querySelector("h1").textContent = "DRAW!!!"
}
