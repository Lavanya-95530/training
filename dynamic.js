


let clickbutton = document.getElementById("add");
let url ="http://localhost:3000/posts"; 

async function dynamicapi() {

          var namel = document.getElementById("name").value;
          var contactl = document.getElementById("contact").value;
          var mailidl = document.getElementById("mailid").value;
          var dobl = document.getElementById("dob").value;
          let url ="http://localhost:3000/posts"; 
          //tableinput.innerHtml="";
          let myObj = {
            "Name": `${namel}`,
            "Contact": `${contactl}`,
            "Mail_id": `${mailidl}`,
            "DOB": `${dobl}`
          }

  let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(myObj)
      })
  console.log(response);
  let user = await response.json();
  console.log(user);
  msg3();
  
}

var tableinput = document.getElementById("demo");
clickbutton.addEventListener("click", dynamicapi)

async function msg3() {
        
        let tableresponse = await fetch(url)
        let tableresponse2 = await tableresponse.json()
        console.log(tableresponse2);
        let variable1="";
        for (let i = 0; i < tableresponse2.length-1; i++) {
          variable1 += `<tr>
        
          <td>${tableresponse2[i+1].Name}</td>
          
          <td>${tableresponse2[i+1].Contact}</td>
          
          <td>${tableresponse2[i+1].Mail_id}</td>
          <td>${tableresponse2[i+1].DOB}</td>
          <td><button id="${tableresponse2[i+1].id}"  onclick="delete2(${tableresponse2[i+1].id})" 
          style="background-color:red" >Delete</button></td>
          <td><button  id="${tableresponse2[i+1]}.id" onclick="edit(${tableresponse2[i+1].id})" 
           style="background-color:yellow">Edit</button></td>
          </tr>`;
            }
            tableinput.innerHTML =variable1;
            variable1=" ";
   }

   var formdiv=document.querySelector(".tab") ;       
   var tableclass=document.querySelector(".tableDiv");

 async function delete2(i){
                let deleteresponse= await fetch(url+"/"+i,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json' }
              })
            let deleteresponse2=await deleteresponse.json(); 
            console.log(deleteresponse2);
            msg3();
            }


   
   clickbutton.addEventListener("click",displaytable);
   function displaytable(){
   tableclass.style.display="block";
   formdiv.style.display="none";
}

/*...............*/



//replace1=document.getElementById("replace");
//replace1.addEventListener("click",edit);


var replacebutton=document.querySelector("#change");




 async function edit(i){
 
    console.log("hello")
  tableclass.style.display="none";
  formdiv.style.display="block";

  replacebutton.addEventListener("click",function(){

    var namel = document.getElementById("name").value;
    var contactl = document.getElementById("contact").value;
    var mailidl = document.getElementById("mailid").value;
    var dobl = document.getElementById("dob").value;
    let url ="http://localhost:3000/posts"; 
    //tableinput.innerHtml="";
    let myObj = {
      "Name": `${namel}`,
      "Contact": `${contactl}`,
      "Mail_id": `${mailidl}`,
      "DOB": `${dobl}`
    };
    
    let editresponse = fetch(url+"/"+i,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(myObj)
     
      });

      // console.log(editresponse);
      // let editresponse2= editresponse.json()
      //  console.log(editresponse2);
           variable1="";
             
             tableclass.style.display="block";
             formdiv.style.display="none";  
             msg3();

    })

  }

  
 

/*async function edit(i){

let editresponse= await fetch(url+"/"+i);
let editresponse2=await editresponse.json();
console.log(editresponse2);
replace(editresponse2)
}

function replace(editresponse2){

 var namel=document.getElementById("name");
 var contactl=document.getElementById("contact");
 var mailidl=document.getElementById("mailid");
 var dobl=document.getElementById("dob");
 namel.value=editresponse2.Name;
 contactl.value=editresponse2.Contact;
 mailidl .value=editresponse2.Mail_id;
 dobl.value=editresponse2.DOB;
 

}*/
