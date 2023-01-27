
  let home="";
  let about="";
  let contact="";
  let error="";
  let contentDisplay=document.querySelector('.main-Div');
//     const fetchDataFromPages=async (page)=>{
//     const response=await fetch(page);
//     const reshtml=await response.text();
//     return reshtml;
// }

//     const loadAllHtmlPages=async ()=>{
//     home=await fetchDataFromPages("spaHome.html");
//     about=await fetchDataFromPages("spaAbout.html");
//     contact=await fetchDataFromPages("spaContact.html");
//     error=await fetchDataFromPages("errorspa.html");
// }


// let mainDiv=document.querySelector(".main-Div");

//     const linkingUrlsToPages=async()=>{
//     await loadAllHtmlPages();
//     mainDiv.innerhtml=home;
//     Match={
//     "/":home,
//     "/about":about,
//     "/contact":contact,
//     "/404":error,
//   };

// };
// linkingUrlsToPages();



// const onNavClick=(pathname)=>{
//   window.history.pushState({}, pathname, window.location.origin + pathname);
//   mainDiv.innerhtml=Match[pathname];
// }


// window.onpopstate = () => {  
// mainDiv.innerHTML = Match[window.location.pathname];
// };




// const handleLocation = async () => 
// {
//   const path = window.location.pathname; 
//   const route = Match[path] || Match[error];
//   const html = await fetch(route).then((data) => data.text());
//   mainDiv.innerHTML = Match[pathname];
// };

async function data(){
  let response1=await fetch('spaHome.html');
  let response2=await fetch('spaAbout.html');
  let response3=await fetch('spaContact.html');
  let response4=await fetch('errorspa.html');

  home=await response1.text();
  about=await response2.text();
  contact=await response3.text();
  error=await response4.text();
  contentDisplay.innerHTML=home;

  routes={
    '#home':home,
    '#about':about,
    '#contacts':contact,
    '#404':error

  };

}
data();

function navigation(){
  window.history.pushState({},window.location.hash);
}
window.addEventListener('hashchange',navigation);
window.onpopstate=()=>{
  if(!routes[location.hash]){
    contentDisplay.innerHTML=routes['#404'];
  }
  else{
    contentDisplay.innerHTML=routes[location.hash];
  }
}
