/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var card
   ,word
   ,go
   ,back
   ,num=0;

card = document.getElementById("card");
go   = document.getElementById("go");
back = document.getElementById("back");

card.innerHTML = "Hellow, how have you been?";
word = ["A","B","C","D","E","F","G"];

function changeWord(){
    card.innerHTML = word[num]
};

go.onclick   = function() {
    ++num;
    changeWord();
};
back.onclick = function() {
    --num;
    changeWord();
};
