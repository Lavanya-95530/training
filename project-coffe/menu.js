// let coffee=document.querySelectorAll(".coffeediv");
// coffee.addEventListener("click",subItemDisplay)
// var indi= document.querySelector(".coffeediv")
var main = document.querySelector(".main-div")
let flag = "items"
var finalResponce;
let storeVAlues = [];
let j;
let original;
var total=0;
//let cost;
let baseURL = "http://localhost:3000/";
async function displayItem() {
    var responce = await fetch(baseURL + flag);
    finalResponce = await responce.json();
    console.log(finalResponce)
    console.log(finalResponce.length)
    let store = "";
    main.innerHTML = "";
    for (var i = 0; i < finalResponce.length; i++) {
        main.innerHTML += `<div class="coffeediv coffeediv${i}">
                <div class="coeffe-img"><img src=${finalResponce[i].image} class="juice"></div>
                <div class="coffee">
                    <h1 class="coffee-heading">${finalResponce[i].name}</h1>
                </div>
            </div>`

    }
    var divClass = document.querySelectorAll(".coffeediv");
    for (let k = 0; k < divClass.length; k++) {
        divClass[k].addEventListener("click", function () {
            subItemDisplay(k)
        })
    }


}
displayItem();

async function subItemDisplay(k, flag) {
    var temp = document.querySelectorAll(".coffee-heading").innerHTML;
    console.log(k)
    console.log(finalResponce[k].name)
    var temp = finalResponce[k].name
    temp = temp.toLowerCase();
    console.log(temp)
    flag = temp;
    let responce1 = await fetch(baseURL + flag);
    original = await responce1.json();
    console.log(original)
    main.innerHTML = "";
    for (j = 0; j < original.length; j++) {
        console.log("finalResponce", original[j])
        main.innerHTML += `<div class="coffeediv coffeediv${j}">
                <div class="coeffe-img"><img src=${original[j].image} class="juice"></div>
                <div class="coffee">
                    <h1 class="coffee-heading">${original[j].name}</h1><br>
                    <h3>${original[j].tag}</h3>
                    <h1> cost:$${original[j].cost}</h1>
                   

                    quantity:<input type="text" placeholder="enter your quantity" id="quantity${j}">
                    <button class="btn btn${j}" onclick="storevalues(${j})">Add</button>
                </div>
            </div>`

    }

}

let totalBill = document.querySelector(".totalBill");
let btn = document.querySelector(".btn");
//btn.addEventListener("click",storevalues);
function storevalues(j) {
    let quantity1 = document.getElementById(`quantity${j}`).value;
    console.log("hello")

    console.log(original)
    console.log(j)
    console.log(`${original[j].cost}`);
    let items = `${original[j].name}`;
    let itemprice = `${original[j].cost}` * quantity1;
    storeVAlues.push({
        "items": `${items}`,
        "itemprice": `${itemprice}`
    })
    console.log(storeVAlues)
    //    console.log(values);
    //    console.log(quantity1);
    //    storeVAlues.push(values);
    //    totalBill.innerHTML=storeVAlues
    //    .reduce(myfunction);

}

let confirm = document.querySelector(".confirm").addEventListener("click", billing)

var tableData = document.querySelector(".table-body");
// console.log(table-body)
function billing() {
    console.log(storeVAlues)
    tableData.innerHTML = ""
    for (let p = 0; p < storeVAlues.length; p++) {
        tableData.innerHTML += `
            <tr id="row${p}">
            <td>${p + 1}</td>
            <td>${storeVAlues[p].items}</td>
            <td>${storeVAlues[p].itemprice}</td>
            <td onclick="cancleOrder(${p})"><button>Cancel</button>
            </tr>
        `
        var temptotal = Number(storeVAlues[p].itemprice);
        total+=temptotal;
    }
    console.log(total)
    document.querySelector(".totalamount").innerHTML += total;

}


let forward1=document.querySelector("#forward1");
forward1.addEventListener("click",farwardfun);
function farwardfun(){
    displayItem(); 
}

 function cancleOrder(rowid){
alert("hii");
let x = document.querySelector(`#row${rowid}`).remove();
console.log("row id is ::- ",x);
document.querySelector(".totalamount").innerHTML = "";
document.querySelector(".totalamount").innerHTML += "BILL AMOUNT IS :" +(total-(storeVAlues[rowid].itemprice));
}