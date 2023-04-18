let btn1= document.querySelector("#btn1");

let btn2= document.querySelector("#btn2");

let btn3= document.querySelector("#btn3");

let btn4= document.querySelector("#btn4");

let text1= document.querySelector("#text1");

let text2= document.querySelector("#text2");

let text3= document.querySelector("#text3");

let text4= document.querySelector("#text4");

let close1= document.querySelector("#close1");

let close2= document.querySelector("#close2");

let close3= document.querySelector("#close3");

let close4= document.querySelector("#close4");


btn1.addEventListener('click', ()=>{
    text1.style.display= "flex";
});

btn2.addEventListener('click', ()=>{
    text2.style.display= "flex";
});

btn3.addEventListener('click', ()=>{
    text3.style.display= "flex";
});

btn4.addEventListener('click', ()=>{
    text4.style.display= "flex";
});

close1.addEventListener('click', ()=>{
    text1.style.display= "none";
   
});

close2.addEventListener('click', ()=>{
    
    text2.style.display= "none";
  
});

close3.addEventListener('click', ()=>{
 
    text3.style.display= "none";
   
});

close4.addEventListener('click', ()=>{

    text4.style.display= "none";
});

