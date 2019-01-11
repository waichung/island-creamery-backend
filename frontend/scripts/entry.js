// Lib
// import Scrollbar from 'smooth-scrollbar';
// import HubSlider from './lib/HubSlider';

// // Utils
// import InteractionManager from './utils/InteractionManager';

// // Views
// import Stories from './views/Stories';
// import Journey from './views/Journey';
// import Header from './views/Header';

// import Product from './views/product/Product';
import Cart from './views/Cart';

/**
 * JavaScript Entry Point
 */
document.addEventListener('DOMContentLoaded', () => {

    var slideIndex = 0;
    autoSlide(slideIndex);

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n+1 > slides.length) {n = 0} 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[n].style.display = "block"; 
        dots[n].className += " active";

    }

    function autoSlide (n) {
        const slideNumber = n > document.getElementsByClassName("mySlides").length ? 0 : n;
        showSlides(slideNumber);
        setTimeout(() => {
            autoSlide(slideNumber + 1)
        }, 2000);
    }
      
    const listOfDots = document.getElementsByClassName('dot');

    listOfDots[0].addEventListener('click', (e) => currentSlide(0));
    listOfDots[1].addEventListener('click', (e) => currentSlide(1));
    listOfDots[2].addEventListener('click', (e) => currentSlide(2));

    const quantityPlusMinus = document.getElementsByClassName('qty-toggle')[0];

    const updateCartBtn = document.querySelector("[name='update_cart']");
    
    if(quantityPlusMinus) quantityPlusMinus.addEventListener('click', () => {
        updateCartBtn.click();
    });

    // HubSlider();

    // const announcementBar = document.getElementById('announcements');
    // const closeButton = document.getElementById('close-announcements');

    // closeButton.addEventListener('click', () => {
    //     announcementBar.classList.add("hide");
    // });

    // DOM Elements
    // const header = new Header();

    // Page Containers
    // const storiesContainer = document.querySelector('[data-stories="container"]');
    // const journeyContainer = document.querySelector('[data-journey="container"]');

    // const productContainer = document.querySelector('[data-product="container"]');
    const cartContainer = document.querySelector('[data-cart="container"]');
    // const checkoutContainer = document.querySelector('[data-checkout="container"]');

    const main = document.querySelector('body');
        //   main.style.height = '100vh';

    // Smooth Scrollbar
    // const scrollbar = Scrollbar.init(main, { damping: 0.2 });

    // if(journeyContainer) new Journey(journeyContainer, scrollbar);
    // if(storiesContainer) new Stories(storiesContainer, scrollbar);
    // if(productContainer) new Product(productContainer, scrollbar);
    // if(cartContainer) new Cart(cartContainer, scrollbar);
    if(cartContainer) new Cart(cartContainer);
});
