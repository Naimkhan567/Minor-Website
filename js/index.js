
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 550) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
};




$('#owl-carousel1').owlCarousel({
    center:true,
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        475:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});



$('#livecarousel1').owlCarousel({
    center:true,
    autoplay:true,
    autoplayTimeout:2000,
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});

$('#thrilcarousel1').owlCarousel({
    center:true,
    autoplay:false,
    autoplayTimeout:3000,
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
});