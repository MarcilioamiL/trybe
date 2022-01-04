const inpText = document.querySelector("#input-text");
const inpBox = document.querySelector("#input-checkbox");
const aHref = document.querySelector("#href");

function a (event){
    event.preventDefault();
    console.log(aHref.value)
}
aHref.addEventListener('click', a);


function box (e) {
    e.preventDefault();
    console.log(inpBox.value)
}
inpBox.addEventListener('click', box);



function texto (e) {
    let letra = e.key;
    if (letra !== 'a'){
        e.preventDefault();
        console.log(inpText.value)
    }
}
inpText.addEventListener('keypress', texto);




