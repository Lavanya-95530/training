

let tablebody=document.querySelector(".tablebody");

async function getData(){
    
        let response=await fetch("http://localhost:3000/services");
        console.log(response);
    
        let response2 =await response.json();
        console.log(response2);
    
    for(let i=0;i<response2.length;i++){
        if(response2[i].status=="active"){
        tablebody.innerHTML+=`<tr>
        <td>${i+1}</td>
       
        
        <td>${response2[i].title}</td>
        <td>${response2[i].website}</td>
        <td>${response2[i].description}</td>
        </tr>`
        }
}
}
getData();