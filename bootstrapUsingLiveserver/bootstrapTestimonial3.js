export  function replaceData(users){
    let userElement=document.querySelector("#list");
    let userElement1=users.map( user =>{
        //console.log("x is ",x)
return `
            
           
     
               
    
     
               <li class="col-3 list-width" >
     
                   <img src="${user.starsImg}"  alt="stars image">
     
                   <p> ${user.content}</p>
     
                       <p>
     
                           <img src="${user.titleImg}" class="personImg-position">
     
                           <span class="doubleQuots-position"><img src="${user.imgquote}" ></span>
     
                       </p>
                       </li>
                     
     
`
    })
    userElement.innerHTML=userElement1.join(" ");
}