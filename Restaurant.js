let items=document.querySelector(".leftContent");
let data=document.querySelector(".item1");
let money=document.querySelector(".money");

 let tableitems=document.querySelector(".tableclass");


var  value;

 async function showItems(){
    let response=await fetch("http://localhost:3000/items");
    console.log(response);
let response2=await response.json();
console.log(response2);
items.innerHTML="";
for(let i=0;i<=response2.length-1;i++){
     items.innerHTML+=`<button class="item1" onclick="dataSelected(${i})">
     ${response2[i].name}</p>${response2[i].price}
     </button>`
}
 }
showItems();

 async function dataSelected(response2){

   
    let response3=await fetch(`http://localhost:3000/items/${response2}`);  
    console.log(`http://localhost:3000/items/${response2}`);
      let listitems= await response3.json();
    console.log(listitems);
    tableitems.innerHTML+=`<tr>
                                <td  >${listitems.name}</td>
                                <td><input   type="text" value="2"></td>
                                <td class="">${listitems.price}</td>
                                </tr>`
      value+=Number(listitems[listitems.price]) ;
      console.log("price:"+value)  ;
      
     let discount=value*0.2;
     console.log("discount:"+discount);
 }

// const order=document.querySelectoe("ticket");
// const charge=document.querySelectoe("charge");

// async function dataaccessing(){

// }
