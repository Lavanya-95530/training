


let items=document.querySelector("#listContent");

async function getData(){
    // let response=await fetch("http://localhost:3000/services");
    let response=await fetch("http://localhost:3000/services");
    console.log(response);

    let response2 =await response.json();
    console.log(response2);
    let temp = "";
   
for(let i=0;i<response2.length;i++){
    
     temp +=`<li class="col-sm-4 "   id="listServices">
    <p class="images"><img src="${response2[i].image}"><span  class="numberImages  float-end"><img src="${response2[i].image2}"</span></p>
    
    <p class="title1">${response2[i].title}</p>
    <p class="website2">${response2[i].website}</p>
    <p class="description1">${response2[i].description}</p>
    </li>`;
   
}
items.innerHTML = temp;


}
getData();

export {items,getData}
