/*
GAME RULES:
-------------------------------------------------
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

functions in brief:
------------------------------------------------
1. Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.


2. Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.

3. Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).


Tasks:
---------------------
1. Add script and CSS files to HTML
2. Generate random roll dice and display dice roll
3. Set active player,(CSS class name: player--active) Add dice roll to current score and display score
4. Hold: Add current score to total score and Switch player
5. Win screen: Add "player--winner" to winner player section
6. Reset/New game.
*/


/*var score=0;
var score2=document.getElementById("score--0");
var score3=document.getElementById("score--1");

var currentscore2=document.getElementById("current--0");
var currentscore3=document.getElementById("current--1");

var rollb=document.getElementById("rollbtn");
rollb.addEventListener("click",player1);
var holdb=document.getElementById("holdbtn");
holdb.addEventListener("click",fcn);
function player1()
{
var dicenum=Math.trunc(Math.random()*6+1);
console.log(dicenum);
if(dicenum==1)
{
document.querySelector('.dice').src="../images/dice-1.png";
document.querySelector("#current--0").textContent=0;
document.querySelector("#score--0").textContent=score;
won();
fcn();
}
else if(dicenum==2)
{
score=score+dicenum;
document.querySelector('.dice').src="../images/dice-2.png";
document.querySelector("#score--0").textContent=0;
document.querySelector("#current--0").textContent=score;
console.log("the current value is:" +score);
won();
}
else if(dicenum==3)
{
score=score+dicenum;
document.querySelector('.dice').src="../images/dice-3.png";
document.querySelector("#score--0").textContent=0;
document.querySelector("#current--0").textContent=score;
console.log("the current value is:"+ score);
won();
}
else if(dicenum==4)
{
score=score+dicenum;
document.querySelector('.dice').src="../images/dice-4.png";
document.querySelector("#score--0").textContent=0;
document.querySelector("#current--0").textContent=score;
console.log("the current value is:" +score);
won();
}

else if(dicenum==5)
{
score=score+dicenum;
document.querySelector('.dice').src="../images/dice-5.png";
document.querySelector("#score--0").textContent=0;
document.querySelector("#current--0").textContent=score;
console.log("the current value is:"+ score);
won();
}
else if(dicenum==6)
{
score=score+dicenum;
document.querySelector('.dice').src="../images/dice-6.png";
document.querySelector("#score--0").textContent=0;
document.querySelector("#current--0").textContent=score;
console.log("the current value is:" +score);
won();
}
}
function reset()
{
 document.querySelector("#score--0").textContent=0;
 document.querySelector("#score--1").textContent=0;
 
 document.querySelector("#current--0").textContent=0;
  document.querySelector("#current--1").textContent=0;

 document.querySelector(".player--0 ").classList.add("player--active");
 document.querySelector(".player--1 ").classList.remove("player--active");
 
 document.querySelector("section1").style.backgroundColor="none";
}
function fcn()
{
 document.querySelector("#score--0").textContent=score;
 score2.innerText=parseInt(score2.innerText)+parseInt(currentscore2.innerText)
 document.querySelector(".player--0 ").classList.remove("player--active");
 document.querySelector(".player--1 ").classList.add("player--active");
  rollb.removeEventListener("click",player1);
  holdb.removeEventListener("click",fcn);
  rollb.addEventListener("click",player2);
   holdb.addEventListener("click",fc2);
    
}
function  won()
{	if(score>=100){
document.querySelector("section").style.backgroundColor="black";
document.querySelector("#score--0").textContent=score;
console.log("you won");
}
}

var score1=0;
function player2()
{
 dicenum=Math.trunc(Math.random()*6+1);
console.log(dicenum);
if(dicenum==1)
{

document.querySelector('.dice').src="../images/dice-1.png";
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--1").textContent=0;
 won1();
 fc2();
}
else if(dicenum==2)
{
score1=score1+dicenum;
document.querySelector('.dice').src="../images/dice-2.png";
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--1").textContent=score1;
console.log("the current value is:" +score1);
 won1();
}
else if(dicenum==3)
{
score1=score1+dicenum;
document.querySelector('.dice').src="../images/dice-3.png";
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--1").textContent=score1;
console.log("the current value is:"+ score1);
 won1();
}
else if(dicenum==4)
{
score1=score1+dicenum;
document.querySelector('.dice').src="../images/dice-4.png";
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--1").textContent=score1;
console.log("the current value is:" +score1);
 won1();
}

else if(dicenum==5)
{
score1=score1+dicenum;
document.querySelector('.dice').src="../images/dice-5.png";
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--1").textContent=score1;
console.log("the current value is:"+ score1);
 won1();
}
else if(dicenum==6)
{
score1=score1+dicenum;
document.querySelector('.dice').src="../images/dice-6.png";
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--1").textContent=score1;
console.log("the current value is:" +score1);
 won1();
}
}
function fc2()
{
 
 document.querySelector("#score--1").textContent=score1;
  score3.innerText=parseInt(score3.innerText)+parseInt(currentscore3.innerText)
 document.querySelector(".player--1 ").classList.remove("player--active");
 document.querySelector(".player--0 ").classList.add("player--active");
 rollb.removeEventListener("click",player2);
  holdb.removeEventListener("click",fc2);
   rollb.addEventListener("click",player1);
    holdb.addEventListener("click",fcn);
    
}
function  won1()
{	
if(score1>=100){
document.querySelector("section1").style.backgroundColor="black";
 document.querySelector("#score--1").textContent=score1;
console.log("you won");
}
}
*/
       
         'use strict';
const player0El   = document.querySelector('.player--0');
const player1El   = document.querySelector('.player--1');
const score0El    = document.querySelector('#score--0');
const score1El    = document.getElementById('score--1');
const current0El  = document.getElementById('current--0');
const current1El  = document.getElementById('current--1');
const diceEl      = document.querySelector('.dice');
const btnNew      = document.querySelector('.btn--new');
const btnRoll     = document.querySelector('.btn--roll');
const btnHold     = document.querySelector('.btn--hold');
score0El.textContent = 0;
// javascript will automatically convert this 0 to string
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentscore = 0;
const scores = [0, 0];
let activePlayer = 0;
let playing = true;
// rolling a dice
const switchPlayer = function () {
currentscore = 0;
document.getElementById(`current--${activePlayer}`).textContent =
currentscore;
activePlayer = activePlayer == 0 ? 1 : 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
if (playing) {
diceEl.classList.remove('hidden');
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
diceEl.src = `../images/dice-${dice}.png`;
if (dice !== 1) {
currentscore += dice;
document.getElementById(`current--${activePlayer}`).textContent =
currentscore;
} else {
switchPlayer();
}
}
});
let active = 0;
btnHold.addEventListener('click', function () {
if (playing) {
scores[activePlayer] += currentscore;
document.getElementById(`score--${activePlayer}`).textContent =
scores[activePlayer];
if (scores[activePlayer] >= 100) {
playing = false;
diceEl.classList.add('hidden');
document.getElementById(`score--${activePlayer}`).textContent = 'Win!';
switchPlayer();
document.getElementById(`score--${activePlayer}`).textContent = 'Lost!';
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
active = activePlayer == 1 ? 0 : 1;
document.querySelector(`.player--${active}`).classList.add('player--active');
} else {
switchPlayer();
}
}
});
btnNew.addEventListener('click', function () {
playing = true;
document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
activePlayer = 0;
document.querySelector('.player--0').classList.add('player--active');
document.querySelector('.player--1').classList.remove('player--active');
scores[0] = 0;
scores[1] = 0;
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
}); 
function Newgame(){
         document.querySelector("#score--0").innerHtml="0";
         document.querySelector("#current--0").innerHtml="0";
         document.querySelector("#score--1").innerHtml="0";
         document.querySelector("#current--1").innerHtml="0";
         } 


