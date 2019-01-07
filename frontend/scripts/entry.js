// Lib
import Scrollbar from 'smooth-scrollbar';
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
    const scrollbar = Scrollbar.init(main, { damping: 0.2 });

    // if(journeyContainer) new Journey(journeyContainer, scrollbar);
    // if(storiesContainer) new Stories(storiesContainer, scrollbar);
    // if(productContainer) new Product(productContainer, scrollbar);
    if(cartContainer) new Cart(cartContainer, scrollbar);
});
