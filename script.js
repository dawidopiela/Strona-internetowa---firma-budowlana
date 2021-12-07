const header = document.querySelector('header');

function naglowek(){
    header.classList.toggle("sticky", window.scrollY >0);
    
    }

window.addEventListener('scroll', naglowek);

