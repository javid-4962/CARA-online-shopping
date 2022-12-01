const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const display = document.getElementById('disble')

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

function addToCart(){
    alert("Item is added to cart..")
}

