document.querySelector("#mybtn").addEventListener("click",first);
function first(){
document.querySelector(".p").style.display="block";
document.querySelector("#main1").style.display="none";
}

var amount=[20000,30000];
var acc=["123456","456789"];
 var pw=["lav","pav"];
transaction5=[];
var l;
var i=0;
		 function msg2(){
		accno=document.getElementById("accountnumber").value;
		 pwdno=document.getElementById("password").value;
		if(acc.includes(accno)){
		l=acc.indexOf(accno);
		    if(pw[l]==pwdno){
                document.querySelector(".p").style.display="none";
                document.querySelector("#page3").style.display="block";
                        }else{
                        alert("Enter correct pasword");
                        }
                }
		else{
		alert("enter correct Accountnumber");
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

  if(wamount>amount[l]){
	alert("you have insufficient amount");
	}
      else{
       amount[l]=amount[l]-wamount;
	alert("your balance is:"+amount[l]);
   display.innerHTML=amount[l]; 
    transaction5.push({ sno:i+1,Type:"Withdraw",Amounts:wamount,Balance:amount[l]});
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
						
						  amount[l]+=parseInt(damount);
							alert("total money:"+amount[l]);
						      	
							
						     display.innerHTML=amount[l];
						                     transaction5.push({sno:i+1,Type:"Deposit",Amounts:damount,Balance:amount[l]}); 
						  console.log(transaction5); 
                       				deposit456.style.display="none";
						document.getElementById("page3").style.display="block";
                                     
					}



		var tbl=document.querySelector(".row");

		var lastone=document.getElementById("last");
		 transaction123.addEventListener("click",transactionfunction);
		function transactionfunction(){
		document.getElementById("page3").style.display="none";
		lastone.style.display="block";


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

function logout1(){
           
           
          document.querySelector(".page5").style.display="none";
						
	 document.querySelector("#page3").style.display="block";
	 
	 
	 
           tbl.innerHTML=`<tr>
						<th> sno</th>
						<th> Type</th>
						<th> Amounts</th>
						<th> Balance</th>
						
						</tr>`
	 
	 
	}
	
	
	
	
	function logout2(){
	
	 document.querySelector(".main3").style.display="none";					
        document.querySelector("#main1").style.display="block";

      }
      
      
      



















