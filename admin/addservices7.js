let titleInput=document.querySelector(".titleform")
let subtitleInput=document.querySelector(".subtitleform");
let descriptionInput=document.querySelector(".descriptionform");
let statusInput=document.querySelector(".statusform");
let Addservicebtn=document.querySelector(".addservices")

Addservicebtn.addEventListener("click",PostDataIntoJson);
let url="http://localhost:3000/services"

async function PostDataIntoJson() {

    let myObj = {
      title: `${ titleInput.value}`,
      website: `${subtitleInput.value}`,
      description: `${descriptionInput.value}`,
      status: `${statusInput.value}`
    }

let response = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(myObj)
})
console.log(response);
let user = await response.json();
console.log(user);

}
