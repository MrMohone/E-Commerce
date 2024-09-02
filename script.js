const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if(bar)/* if bar have? */{
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close)/* if bar have? */{
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const addToCart = document.querySelector('.normal');

addToCart.addEventListener('click',function(){
    
    window.location.href='cart.html';

})