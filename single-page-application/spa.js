
  let home="";
  let about="";
  let contact="";
  let error="";

    const fetchDataFromPages=async (page)=>{
    const response=await fetch(page);
    const reshtml=await response.text();
    return reshtml;
}

    const loadAllHtmlPages=async ()=>{
    home=await fetchDataFromPages("spaHome.html");
    about=await fetchDataFromPages("spaAbout.html");
    contact=await fetchDataFromPages("spaContact.html");
    error=await fetchDataFromPages("errorspa.html");
}


let mainDiv=document.querySelector(".main-Div");

    const linkingUrlsToPages=async()=>{
    await loadAllHtmlPages();
    mainDiv.innerhtml=home;
    Match={
    "/":home,
    "/about":about,
    "/contact":contact,
    "/404":error,
  };

};
linkingUrlsToPages();



const onNavClick=(pathname)=>{
  window.history.pushState({}, pathname, window.location.origin + pathname);
  mainDiv.innerhtml=Match[pathname];
}


window.onpopstate = () => {  
mainDiv.innerHTML = Match[window.location.pathname];
};




const handleLocation = async () => 
{
  const path = window.location.pathname; 
  const route = Match[path] || Match[error];
  const html = await fetch(route).then((data) => data.text());
  mainDiv.innerHTML = Match[pathname];
};

