let submit_btn= document.querySelector("#submit-btn");


submit_btn.addEventListener('click', ()=>{
    // let randonDice= getRandomNumber();
    // console.log(randonDice);
    let imageTag= document.getElementById("images");
    // imageTag.src= './img/dice'+randonDice+'.png';
    imageTag.src=`img/dice${getRandomNumber()}.png`
});

function getRandomNumber(){
    return Math.ceil(Math.random()*6);
}