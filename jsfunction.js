   
   var amount1=20000;
   var amount2=30000;
   var c;
 var acc1="123456";
 var acc2="456789";
 var pw1="lav";
 var pw2="pav";
 var transaction1=[];
 
 
    function msg(){
       
          var accountnumber=document.getElementById("accountnumber").value;
      
          var password=document.getElementById("password").value;
         
          if(accountnumber==acc1 && password==pw1||accountnumber==acc2 && password==pw2) 
          {  
           
           condition(accountnumber,password);
            
          }
          else
          {
         Window.location="js3function.html"
          }
        }
        
        function condition(accountnumber,password){
			
			
			var c=prompt("Welcome to your account \n 1.checking balance \n 2.withdraw money \n 3.deposit funds \n   4.Transaction\n 5.exit");
						
			switch(c){
			
			        case "1":
				            balance(accountnumber,password); 
				            break;                               
				case "2":                  
				           withdraw(accountnumber,password);
				           break;
				case "3":
				            deposit(accountnumber,password);
				            break;
				case "4":
				           transaction(accountnumber,password);
				           break; 
				case "5":
				              logout(accountnumber,password);
				              break;
				              }
				
					}	
							
                             function balance(accountnumber,password){  
                                                 
       
                                            if(accountnumber==acc1 && password==pw1){
	                                       alert("balance"+amount1);
	                                       condition(accountnumber,password);
	                                       
							}
							else{
							alert("balance"+amount2);
							condition(accountnumber,password);
						         }
							}
	                     function withdraw(accountnumber,password){
	                     var wm=prompt(" withdraw \n enter your amount");
						if(accountnumber==acc1 && password==pw1){
						if(wm>amount1){
						alert("you have insufficient amount");
						condition(accountnumber,password);
						}
						else{
						amount1=amount1-wm;
						alert("your balance is:"+amount1);
						transaction1.push("withdraw="+wm+"total amount="+amount1+"\n");
						condition(accountnumber,password);
						}
						}
						else{
							if(wm>amount2){
						alert("you have insufficient amount");
						condition(accountnumber,password);
						}
						else{
						amount2=amount2-wm;
						alert("your balance is:"+amount2);
		          transaction1.push("withdraw="+wm+"total amount="+amount2+"\n");
						condition(accountnumber,password);
							}
							}
							}
							
				function deposit(accountnumber,password){
				var dp=prompt("deposit amount");
				
						if(accountnumber==acc1 && password==pw1){
						
							amount1+=parseInt(dp);
							alert("total money"+amount1);
                                      transaction1.push("deposit="+dp+"total amount="+amount1+"\n");
							condition(accountnumber,password);
							}
							else{
							amount2+=Number(dp);
							alert("total money"+amount2);
				transaction1.push("deposit="+dp+"total amount="+amount2+"\n");
							condition(accountnumber,password);
							}
							}
							function transaction(accountnumber,password){
							alert(transaction1);
							condition(accountnumber,password);
							}
				function logout(accountnumber,password){
				alert("log out");
				Window.location="js3function.html"			
				}
							
			
			
