
document.querySelector("#mybtn").addEventListener("click",first);
function first(){
document.querySelector(".p").style.display="block";
document.querySelector("#main1").style.display="none";
}

var accno; 
var pwdno;
var amount=20000;
transaction5=[];
i=0;
function msg2(){
accno=document.getElementById("accountnumber").value;
 pwdno=document.getElementById("password").value;
if(accno=="123456"&&pwdno=="123"){

document.querySelector(".p").style.display="none";

document.querySelector("#page3").style.display="block";
}
else{


alert("enter correct details");
}
}
document.querySelector("#wd").addEventListener("click",withdraw);
function withdraw(){
document.querySelector(".btclass").style.display="block";
}

document.querySelector("#dw").addEventListener("click",deposite);
function deposite(){
document.querySelector(".btclass").style.display="block";
}
document.querySelector("#ts").addEventListener("click",deposite);
function deposite(){
document.querySelector(".btclass").style.display="block";
}


var withdraw123=document.getElementById("wd");
var deposit123=document.getElementById("dw");
var transaction123=document.getElementById("ts");
var withdraw456=document.getElementById("withdraw1");
var deposit456=document.getElementById("deposit1");
var transaction456=document.getElementById("transaction1");



var  display=document.getElementById("amt");
var wamount;

  withdraw123.addEventListener("click",withdrawfunction);
 function withdrawfunction(){
document.getElementById("page3").style.display="none";
withdraw456.style.display="block";

document.querySelector(".names1").onclick=function(){
      wamount=document.getElementById("withdraw2").value;
     
     alert(wamount);
     withdraw789();
       
     }
     
     }
     
     
function withdraw789(){
  if(wamount>amount){
	alert("you have insufficient amount");
	}
      else{
       amount=amount-wamount;
	alert("your balance is:"+amount);
   display.innerHTML=amount; 
    transaction5.push({ sno:i+1,Type:"Withdraw",Amounts:amount,Balance:amount});
console.log(transaction5);
}
withdraw456.style.display="none";
document.getElementById("page3").style.display="block";

}
							
							
							 deposit123.addEventListener("click",depositfunction);

												        
							function depositfunction(){
							document.getElementById("page3").style.display="none";
							deposit456.style.display="block";

							document.querySelector(".names2").onclick=function(){
							      damount=document.getElementById("deposit2").value;
							     
							      deposit789();
							     }
							     }
							 
							       
							     
							     
							     


						function deposit789(){
						
						  amount+=parseInt(damount);
							alert("total money:"+amount);
						      	
							
						     display.innerHTML=amount;
						                     transaction5.push({sno:i+1,Type:"Deposit",Amounts:amount,Balance:amount}); 
						  console.log(transaction5); 
                       				deposit456.style.display="none";
						document.getElementById("page3").style.display="block";
                                     
					}

                                       					
var lastone=document.getElementById("last");
 transaction123.addEventListener("click",transactionfunction);
function transactionfunction(){
document.getElementById("page3").style.display="none";
lastone.style.display="block";

var tbl=document.querySelector(".row")
for(let k=0;k<transaction5.length;k++){
var output=document.getElementsByTagName("tr");
tbl.innerHTML+=`<tr>
<th>${k+1}</th>
<th>${transaction5[k].Type}</th>
<th>${transaction5[k].Amounts}</th>
<th>${transaction5[k].Balance}</th>
</tr>`
}
}

  if(transaction5[k].Type==="Withdraw"){
  tbl.style.display="red";
 }
 else{
 tbl.style.display="green";
 }
 function lav(){
 location.reload();
 }
