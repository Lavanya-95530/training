   
   var amount1=20000;
   var amount2=30000;
   var c;
 var p="123456";
 var q="456789";
 var r="lav";
 var s="pav";
 
 
    function msg(){
       
          var accountnumber=document.getElementById("accountnumber").value;
      
          var password=document.getElementById("password").value;
         
          if(accountnumber==p && password==r||accountnumber==q && password==s) 
          {  
           
           condition(accountnumber,password);
            
          }
          else
          {
         Window.location="js3.html"
          }
        }
        
        function condition(accountnumber,password){
			
			
			var c=prompt("Welcome to your account \n 1.checking balance \n 2.withdraw money \n 3.deposit funds \n    4.exit");
						
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
				              logout(accountnumber,password);
				              break;
				              }
				
					}	
							
                             function balance(accountnumber,password){  
                                                 
       
                                            if(accountnumber==p && password==r){
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
						if(accountnumber==p && password==r){
						if(wm>amount1){
						alert("you have insufficient amount");
						condition(accountnumber,password);
						}
						else{
						amount1=amount1-wm;
						alert("your balance is:"+amount1);
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
						condition(accountnumber,password);
							}
							}
							}
							
				function deposit(accountnumber,password){
				var dp=prompt("deposit amount");
				
						if(accountnumber==p && password==r){
						
							amount1+=parseInt(dp);
							alert("total money"+amount1);
							condition(accountnumber,password);
							}
							else{
							amount2+=Number(dp);
							alert("total money"+amount2);
							condition(accountnumber,password);
							}
							}
				function logout(accountnumber,password){
				alert("log out");			
				}
							
			
			
