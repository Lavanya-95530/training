document.querySelector("#mybtn").addEventListener("click",first);


function first(){
document.querySelector(".p").style.display="block";
document.querySelector("#main1").style.display="none";
}

var amount=[20000,30000];
var acc=["123456","456789"];
 var pw=["lav","pav"];
 let transaction5=[[],[]];
 var l;
 var i=0;
 
var modal3=document.getElementById("modal2");
var cls=document.getElementsByClassName("cross")[0];
var btn=document.getElementById("mybtn2");

var modal6=document.getElementById("modal5");
var cls1=document.getElementsByClassName("cross1")[0];

//...............
//var cancel2=document.querySelector(".back")


		function msg2(){
		/* //...............
		 document.querySelector(".back").addEventListener("click",function(){
		 
		 
		 document.querySelector("#main1").style.display="block";
		 document.querySelector("#main2").style.display="none";
		 });*/
		 //........*/
		 
		 
		 
		 
	let	accno=document.getElementById("accountnumber").value;
		 pwdno=document.getElementById("password").value;
		if(acc.includes(accno)){
		l=acc.indexOf(accno);
		
		
		    if(pw[l]==pwdno){
		    modal3.style.display="none";
                document.querySelector(".p").style.display="none";
                document.querySelector("#page3").style.display="block";
                        }
                         else {
                           modal3.style.display="block";
                        
                        cls.addEventListener("click",close)
                  
                          function close(){
                         modal3.style.display="none";
                         }
                            
                //  alert("Enter correct pasword");
                        
                        
                        
                        
                }
                }
		else {
		
		modal6.style.display="block";
                        
                        cls1.addEventListener("click",close1)
                         
                       function close1(){
                         modal6.style.display="none";
		//alert("enter correct Accountnumber");
		}
		}
}

/*document.querySelector("#wd").addEventListener("click",withdraw);
function withdraw(){
document.querySelector(".btclass").style.display="block";
}

document.querySelector("#dw").addEventListener("click",deposite);
function deposite(){
document.querySelector(".btclass").style.display="block";
}*/
			var withdraw123=document.getElementById("wd");
			var deposit123=document.getElementById("dw");
			var transaction123=document.getElementById("ts");
			var withdraw456=document.getElementById("withdraw1");
			var deposit456=document.getElementById("deposit1");
			var transaction456=document.getElementById("transaction1");
			var  display=document.getElementById("amt");
			var account=document.getElementById("amt2");
			var wamount;

  withdraw123.addEventListener("click",withdrawfunction);
  function withdrawfunction(){
  document.getElementById("page3").style.display="none";
  withdraw456.style.display="block";

  document.querySelector(".names1").onclick=function(){
  wamount=document.getElementById("withdraw2").value;
      
      
      
      
     
     //alert(wamount);
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
        account.innerHTML=acc[l]; 
        transaction5[l].push({ sno:i+1,Type:"Withdraw",Amounts:wamount,Balance:amount[l]});
        console.log(transaction5[l]);
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
						                      transaction5[l].push({sno:i+1,Type:"Deposit",Amounts:damount,Balance:amount[l]}); 
						  console.log(transaction5); 
                       				deposit456.style.display="none";
						document.getElementById("page3").style.display="block";
                                     
					}



		var tbl=document.querySelector(".row");

		var lastone=document.getElementById("last");
		 transaction123.addEventListener("click",transactionFunction);
		 
		 
		 
		function transactionFunction(col){
		          tbl.innerHTML=`<tr>
						<th> sno</th>
						<th> Type</th>
						<th> Amounts</th>
						<th> Balance</th>
						
						</tr>`
		
			document.getElementById("page3").style.display="none";
			lastone.style.display="block";
			

			for(let k=0;k<transaction5[l].length;k++){
			var output=document.getElementsByTagName("tr");
			tbl.innerHTML+=`<tr>
			<th>${k+1}</th>
			<th>${transaction5[l][k].Type}</th>
			<th>${transaction5[l][k].Amounts}</th>
			<th>${transaction5[l][k].Balance}</th>
			</tr>`
			
			
			if(transaction5[l][k].Type=="Withdraw"){
				if(col==3){
				output[k+1].style.display="none";
				//close1();
				}
			output[k+1].style.color="red";
			}
			
			else if(transaction5[l][k].Type=="Deposit"){
			
				if(col==2){
				output[k+1].style.display="none";
				//close1();
				}
			output[k+1].style.color="green";
			}
			
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
      
      function logout3(){
      
         document.querySelector("#withdraw1").style.display="none";					
	 document.querySelector("#page3").style.display="block";
	 }


 
      function logout4(){
     
         document.querySelector("#deposit1").style.display="none";					
	 document.querySelector("#page3").style.display="block";
	 
}

/*function close2(){
                                        tbl.innerHTML=`<tr>
						<th> sno</th>
						<th> Type</th>
						<th> Amounts</th>
						<th> Balance</th>
						
						</tr>`
}

/*


 /*  function trans(){
   
           if(transaction5[l].Type=="Withdraw"){
           for(let k=0;k<transaction5[l].length;k++){ 
           var output=document.getElementsByTagName("tr");
			tbl.innerHTML+=`<tr>
			<th>${k+1}</th>
			<th>${transaction5[l][k].Type}</th>
			<th>${transaction5[l][k].Amounts}</th>
			<th>${transaction5[l][k].Balance}</th>
			</tr>`
           
           }
           
           
           
           
           
            
}
}
function trans1(){

if(transaction5[l].Type=="Withdraw"){
           for(let k=0;k<transaction5[l].length;k++){ 
           var output=document.getElementsByTagName("tr");
			tbl.innerHTML+=`<tr>
			<th>${k+1}</th>
			<th>${transaction5[l][k].Type}</th>
			<th>${transaction5[l][k].Amounts}</th>
			<th>${transaction5[l][k].Balance}</th>
			</tr>`
           
           }
}
}



/*var k;
function transaction11(){
for( k=0;k<transaction5[l].length;k++){
			var output=document.getElementsByTagName("tr");
			tbl.innerHTML+=`<tr>
			<th>${k+1}</th>
			<th>${transaction5[l][k].Type}</th>
			<th>${transaction5[l][k].Amounts}</th>
			<th>${transaction5[l][k].Balance}</th>
			</tr>`
}

}   
              var lastone=document.getElementById("last");
		 transaction123.addEventListener("click",transactionfunction(Type));
		 document.getElementById("page3").style.display="none";
			lastone.style.display="block"; 		
    		var Type; 
		function transactionfunction(Type){  
		                              
			document.getElementById("page3").style.display="none";
			lastone.style.display="block";
                if(Type=="Withdraw"){  
                    transaction11();
			}
			
    		
    		
    		
    		
    		else {
    		transaction11();
    		}
    		}
    		
    		*/
   /* 	var out1=document.getElementById("ts1")	;
    	var out2=document.getElementById("ts2")	;
    	
   function trans(value){
   
    		
    		if(value=="withdraw"){
    		
			for(let k=0;k<transaction5[l].length;k++){
			var output=document.getElementsByTagName("tr");
			tbl.innerHTML+=`<tr>
			<th>${k+1}</th>
			<th>${transaction5[l][k].Type}</th>
			<th>${transaction5[l][k].Amounts}</th>
			<th>${transaction5[l][k].Balance}</th>
			</tr>`
			
    		}
    		}
    		else if(value=="deposit"){
    		for(let k=0;k<transaction5[l].length;k++){
    		var output=document.getElementsByTagName("tr");
			tbl.innerHTML+=`<tr>
			<th>${k+1}</th>
			<th>${transaction5[l][k].Type}</th>
			<th>${transaction5[l][k].Amounts}</th>
			<th>${transaction5[l][k].Balance}</th>
			</tr>`
			
    		}
    		
    		}
    		
    		}
    		*/
    		
    		
    		
    		
    		



























