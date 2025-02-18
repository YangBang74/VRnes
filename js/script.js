function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
}
const accordion = document.getElementById('myAccordion');
accordion.addEventListener('click', (e) => {
    const header = e.target.closest('.accordion-header');
    if (header) {
        const item = header.parentElement;
        item.classList.toggle('active');
    }
});
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});
const verticalSWiper = new Swiper(".swiper-2", {
    direction: "vertical", 
    slidesPerView: 3,
    mousewheel: {
        invert: false, 
        releaseOnEdges: true,
    }
});
const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('#menu');
const body = document.querySelector('body');

burgerMenu.addEventListener('click', () =>{
    burgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('click');
})