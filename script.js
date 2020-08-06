const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const h1 = document.querySelector("h1");

const player1 = Math.floor((Math.random() * 6 ) + 1);
const player2 = Math.floor((Math.random() * 6 ) + 1);
console.log(player1);
console.log(player2);

function randomDice(player,image) {
   if (player === 1) {
    image.setAttribute("src","images/dice1.png");
   }else if(player === 2){
    image.setAttribute("src","images/dice2.png");
   }else if(player === 3){
    image.setAttribute("src","images/dice3.png");
    }else if(player === 4){
    image.setAttribute("src","images/dice4.png");
    }else if(player === 5){
    image.setAttribute("src","images/dice5.png");
    }else if(player === 6){
    image.setAttribute("src","images/dice6.png");
    }

    if (player1 === player2) {
        h1.textContent = "Draw";
    }
    if (player1 > player2) {
        h1.textContent = "Player1 wins";
    }
    if (player1 < player2) {
        h1.textContent = "Player 2 wins";
    }
}

randomDice(player1,img1);
randomDice(player2,img2);
    