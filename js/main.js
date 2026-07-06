window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="#081f3f";

navbar.style.boxShadow="0 4px 10px rgba(0,0,0,.2)";

}

else{

navbar.style.background="#0d2b52";

navbar.style.boxShadow="none";

}

});
