
var jsonresponse;

async function getDataFromApi(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users");
 jsonresponse=await response.json();
    console.log(jsonresponse);
  
 

    let inputtext=document.querySelector("#search");
 
    inputtext.onkeyup=function(){
        document.getElementById("listitems").innerHTML="";
//console.log("hii");
//console.log(jsonresponse);
for(let i=0;i<jsonresponse.length;i++){
console.log(inputtext.value);
console.log(jsonresponse[i].name);
    if(jsonresponse[i].name.toLowerCase().includes(inputtext.value.toLowerCase())){

     document.getElementById("listitems").innerHTML+=` <li>${jsonresponse[i].name}</li>
       `
    }
}
 }
}

getDataFromApi();










