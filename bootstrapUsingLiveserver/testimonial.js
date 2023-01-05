
import {replaceData} from './bootstrapTestimonial3.js'
import {items,getData} from './bootstrapServices.js';
let jsonresponse;
async function getdataFromApi(){
    try{
       let response=await fetch("http://localhost:3000/testimonial");
       if(response.status!==200)throw(e);
       console.log(response);
        jsonresponse=await response.json();
        console.log(jsonresponse);
   replaceData(jsonresponse);
    }
   
   catch(e){
       console.log(e);
    }
   
   
   }
   getdataFromApi();


//   function replaceData(users){
//     let userElement=document.querySelector("#list");
//     let userElement1=users.map( user =>{
//         //console.log("x is ",x)
// return `
            
           
     
               
    
     
//                <li class="col-3 list-width" >
     
//                    <img src="${user.starsImg}"  alt="stars image">
     
//                    <p> ${user.content}</p>
     
//                        <p>
     
//                            <img src="${user.titleImg}" class="personImg-position">
     
//                            <span class="doubleQuots-position"><img src="${user.imgquote}" ></span>
     
//                        </p>
//                        </li>
                     
     
// `
//     })
//     userElement.innerHTML=userElement1.join(" ");
// }