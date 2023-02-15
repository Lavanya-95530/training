
var inputvalue;
var leftcontent = document.querySelector(".leftside-bar");
var  searchButton= document.querySelector(".searchbutton");
var bigimg=document.querySelector(".rightside-image");
var pageNo=1;
var jsondata1;
var Reciepelist=document.querySelector(".ingredients");

searchButton.addEventListener('click', inputfunction);


var limit= 7;

var jsondata;
var jsondata1;

async function inputfunction() {
  inputvalue = document.querySelector(".input").value;
  console.log(inputvalue)
 
  let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${inputvalue}`);
  jsondata = await response.json();
  console.log(jsondata)
  intial();
}
function intial() {
  leftcontent.innerHTML ="";
  lower=limit*pageNo-limit;
  upper=limit*pageNo;
  for (let i = lower; i < upper; i++) {
    leftcontent.innerHTML +=
      `<div onclick="imageclick('${jsondata.recipes[i].recipe_id}')" class="leftsideimage">
					  <img src='${jsondata.recipes[i].image_url}'class="images">
					    <div class="imagecontent">
					       <h3 class="items">${jsondata.recipes[i].title} </h3>
						   <h5 class="items1">${jsondata.recipes[i].publisher}</h5>
						</div> <br>`
  }
}

function nextbutton(){
  pageNo++;
  intial();
}

function previosbutton(){
  pageNo--;
  intial();
}
async function imageclick(data){
  console.log(data);
  Reciepelist.innerHTML=""; 

   let url=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${data}`);
   jsondata1=await url.json();

   console.log(jsondata1);
   bigimg.src=jsondata1.recipe.image_url;
  for(var k in jsondata1.recipe.ingredients){
    Reciepelist.innerHTML+=`<li><img src="../images/check_icon .svg"class="tickmark">
   <h6 class="recipecontent">${jsondata1.recipe.ingredients[k]}</h6></li>`
  }



}


