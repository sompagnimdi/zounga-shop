let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active')
    search.classList.remove('active')
    cart.classList.remove('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active')
    search.classList.remove('active')
    cart.classList.remove('active')
    user.classList.remove('active')
}

window.onscroll = () => {
    search.classList.remove('active')
    cart.classList.remove('active')
    user.classList.remove('active')
    navbar.classList.remove('active')
}


// Navbar Scroll 

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})


// Swiper 
var Swiper = new Swiper('.new-arrival', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
