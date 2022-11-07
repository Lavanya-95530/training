var Score=20;
var highscore=0;
var temp=false;
var randomnumber=Math.trunc(Math.random()*20)+1;
console.log(randomnumber);

 /*function Alert(){
      if(temp==false){
      alert(" Please press again button");
      }
      }*/


          function box(){
                    var userGuess=document.querySelector(".box").value;
                    userGuess=Math.trunc(userGuess);
                    //console.log(userGuess);
                    if(temp==true){
      alert(" Please press again button");
      }
                                else if(userGuess==randomnumber&&userGuess>0&&userGuess<=20){
                                if(Score>highscore){
                                highscore=Score;
                                document.querySelector("#hig").innerHTML="💯️ highscore:"+highscore;
                             // document.querySelector(".check").disabled=true;
                              
                                
                                 
                                }
                                               document.querySelector("#sco").innerHTML="💯️  Score:"+Score;
                                               document.querySelector("#start").innerHTML="you won the Game";
                                               document.querySelector(".question").innerHTML=randomnumber;
                                               console.log("you won the Game");
                                               document.querySelector("body").style.backgroundColor="green";
                                              temp=true; 
                                             // Alert();
                                 }
                            
                                 
                                        else  if(randomnumber<userGuess&&userGuess>0&&userGuess<=20){
                                                    
                                                      Score--;
                                                      repeat();
                                                      document.querySelector("#sco").innerHTML="💯️  Score:"+Score;
                                                      document.querySelector("#start").innerHTML="too high";
                                         }
                                         else if (randomnumber>userGuess&&userGuess>0&&userGuess<=20){
                                                       Score--;
                                                        repeat();
                                                       document.querySelector("#sco").innerHTML="💯️  Score:"+Score;
                                                       document.querySelector("#start").innerHTML="too low";

                                              }
                                              
                                              
                                              else{
                                                 alert("enter digits b/w 1 to 20");  
                                                 
                                 }
            }
            
  
    function repeat(){
     document.querySelector(".box").value="";
     }
     
     
     function again(){
     temp=false;
     Score=20;
     repeat();
     document.querySelector(".question").innerHTML="?";
     document.querySelector("#sco").innerHTML="💯️  Score:"+Score;
      document.querySelector("body").style.backgroundColor="black";
     //document.querySelector(".check").disabled=false;
      
      randomnumber=Math.trunc(Math.random()*20)+1;
      console.log(randomnumber);
      
     
      }
     
    
    
