let counter= 0;

let plusbtn= document.getElementById("plus")
let minusbtn= document.getElementById("minus");

let display=document.getElementById("counter-display");

let reset= document.getElementById("reset");

plusbtn.addEventListener('click', ()=>{
    counter++;
    display.innerHTML= counter;
});

minusbtn.addEventListener('click', ()=>{
    counter--;
    display.innerHTML= counter;
});

reset.addEventListener('click', ()=>{
    counter=0;
    display.innerHTML= counter;
});
