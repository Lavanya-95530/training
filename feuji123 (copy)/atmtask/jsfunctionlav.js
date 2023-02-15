var amount1=20000;
   var amount2=30000;
   //var c;
 var acc1="123456";
 var acc2="456789";
 var pw1="lav";
 var pw2="pav";


    function msg(){

          var accountnumber=document.getElementById("accountnumber").value;

          var password=document.getElementById("password").value;

          if(accountnumber==acc1 && password==pw1||accountnumber==acc2 && password==pw2) 
          {  

           condition(accountnumber,password);

          }
          else
          {
          alert("enter correct details");
         Window.location="js3function.html";
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

						if(accountnumber==acc1 && password==pw1){

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
				location.reload();			
				}


