let items = document.querySelector(".leftContent");
let data = document.querySelector(".item1");
let money = document.querySelector(".money");
let discount = 0;
let order = 0;
let tableitems = document.querySelector(".tableclass2");
var orderItems = [];
let total;
var value = 0;
let AddDisTax;
const quantity1 = document.querySelector(".wdth");
const ticket = document.querySelector(".ticket");
let value12 = document.querySelector(".value12");
let clear = document.querySelector(".clear");
let textarea = document.querySelector(".textArea");
let current = document.querySelector(".current");
let viewTable = document.querySelector(".viewTable");
let rightContent = document.querySelector(".rightContent");
let demo = document.querySelector("#demo")
let charge = document.querySelector(".charge");





async function showItems() {
  let response = await fetch("http://localhost:3000/items");
  console.log(response);
  let response2 = await response.json();
  console.log(response2);
  items.innerHTML = "";
  for (let i = 1; i <= response2.length - 1; i++) {
    items.innerHTML += `<button class="item1" onclick="dataSelected(${i})">
     ${response2[i - 1].name}</p>${response2[i - 1].price}
     </button>`
  }
}
showItems();




async function dataSelected(i) {

  let response3 = await fetch(`http://localhost:3000/items/${i}`);
  console.log(`http://localhost:3000/items/${i}`);
  let listitems = await response3.json();
  console.log(listitems);
  orderItems.push(listitems);
  console.log(orderItems);
  console.log(listitems);
  displayTable();
}
function displayTable() {
  tableitems.innerHTML ="";
  console.log(orderItems);
  for(let f in orderItems){
  tableitems.innerHTML += `<tr>
                 <td  >${orderItems[f].name}</td>
             <td><input type="text" class="center" id="${orderItems[f].name}-quantity" 
               onchange="quantitychange(${f})"
               value=${(orderItems[f].quantity)}></td>
              <td class="changePrice" id="${orderItems[f].name}-price">${orderItems[f].price*orderItems[f].quantity}</td>
                   </tr>`
                   value += Number(orderItems[f].price*orderItems[f].quantity);
  }
  order++;
  calculation();
}


function calculation() {
  
  console.log("price:" + value);

  discount = Number(value * 0.1);
  console.log("discount:" + discount);

  document.querySelector("#discountID").innerHTML = `${discount}` + " rs"

  document.querySelector(".tax").innerHTML = (value / 100) * 4 + "rs";

  total = Number(value - discount + (value / 100) * 4);
  console.log(total);

  charge.innerHTML = total + " rs";
  value12.innerHTML = order;
 // return listitems;

}




clear.addEventListener("click", clearfun);
function clearfun() {

  value12.innerHTML = 0;
  tableitems.innerHTML = "";

}




ticket.addEventListener("click", selectedItemsIntoJson);
async function selectedItemsIntoJson() {


  var myObj = {
    customerName: textarea.value,

    items: orderItems,
    TotalPrice: total,
    Discount: discount,
    Tax: (value / 100) * 4,
    PriceValue: value
  };

  let response5 = await fetch("http://localhost:3000/selectedItems", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(myObj)
  });
  let resonse6 = await response5.json();
  console.log(resonse6);
}




// function changeQuantity(elementID){

//   console.log("elementID :: ", elementID);
//       let quantityValue = document.querySelector("#"+`${elementID}`).value;
//       console.log("Quantity changed :: ",quantityValue);

//       //Idle-quantity, Chapathi-quantity
//       let tempStr = elementID.substring(0, elementID.length - 9);

//       console.log(" tempStr :: ", tempStr);

//       let priceElement = document.querySelector("#"+`${tempStr}`+"-price");
//       console.log("priceElement.textContent ::",priceElement.innerText);
//       priceElement.textContent = quantityValue * priceElement.textContent;
//      //total=Number(value-discount+(value/100)*4);
//       console.log(" Total ::",total);

//       charge.textContent= total+priceElement.textContent;

//     }



current.addEventListener("click", currentTable);
function currentTable() {
  items.style.display = "none";
  rightContent.style.display = "none";
  viewTable.style.display = "block";
  fetchDataIntoTable();
}



async function fetchDataIntoTable() {
  console.log("hii");

  let response7 = await fetch("http://localhost:3000/selectedItems");
  console.log(response7);
  let response8 = await response7.json();
  console.log(response8);
  for (let j = 0; j < response8.length; j++) {

    demo.innerHTML += `<tr>
                    <td>${response8[j].id}</td>
                    <td>${response8[j].customerName}</td>
                    <td> ${response8[j].TotalPrice + "rs"}</td>
                    <td> <button class="viewSummary" onclick="summaryInModal('${response8[j].id}')">view</button></td>
                   </tr>`
  }

}




let url = "http://localhost:3000/selectedItems";


let viewSummary = document.querySelector(".viewSummary");

async function summaryInModal(idvalue) {
  ModalClass.innerHTML ="";
  console.log(idvalue);
  ModalClass.style.display = "block";
  let response9 = await fetch(`http://localhost:3000/selectedItems/${idvalue}`);
  console.log(response9);
  let response11 = await response9.json();
  console.log(response11);
for(let j=0;j < response11.items.length;j++){
  ModalClass.innerHTML += `<p> 
                           ITEMSNAME:${response11.items[j].name}<br></p>`                          
}
                  ModalClass.innerHTML += `<p> 
                                         DISCOUNT:${response11.Discount}<br></p>`
                         ModalClass.innerHTML += `<p>    TAX:  ${response11.Tax}<br></p>`
                         ModalClass.innerHTML += `<p>      PRICE: ${response11.PriceValue}</p>`



}
var span = document.getElementsByClassName("cross")[0];
let ModalClass = document.querySelector(".model");

span.onclick = function () {
  ModalClass.style.display = "none";
}







function quantitychange(data) {
  var quantityInput = document.querySelectorAll(".center");
  console.log(data);
  orderItems[data].quantity = quantityInput[data].value;
  console.log(orderItems[data].quantity);
  displayTable();
}

