


let items=document.querySelector(".MainContent");

async function getData(){
    let response=await fetch("http://localhost:3000/services");
    console.log(response);

    let response2 =await response.json();
    console.log(response2);

for(let i=0;i<response2.length;i++){

    items.innerHTML +=`<li>
    <p class="images"><img src="${response2[i].image}"><span  class="numberImages"><img src="${response2[i].image2}"</span></p>
    
    <p class="title1">${response2[i].title}</p>
    <p class="website2">${response2[i].website}</p>
    <p class="description1">${response2[i].description}</p>
    </li>`;
   
}



}
getData();

// let tableClass=document.querySelector(".tableClass")
//  let services=document.querySelector(".services");
//  let main=document.querySelector(".main");
//  tablebody=document.querySelector(".tableclass");
//  services.addEventListener("click",ToDisplayTable);

//  function ToDisplayTable(){
//     tableClass.style.display="block";
//     main.style.display="none";

// }






















