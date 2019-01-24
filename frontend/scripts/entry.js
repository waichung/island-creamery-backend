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

/* SECTION SHOP PAGE PRIMARY FILTER
var scrollW = document.getElementById("wrap-scroll");
var scrollUl = document.getElementById("ul-scroll");
var itemsScrolled,
    itemsMax,
    cloned = false;

var listOpts = {
  itemCount: null,
  itemHeight: null,
  items: [],
};

function scrollWrap () {
  

  itemsScrolled = Math.ceil( (scrollW.scrollLeft + listOpts.itemWidth / 2 ) / listOpts.itemWidth);
 
  if (this.scrollLeft < 1) {
    itemsScrolled = 0;
  }
     
//   listOpts.items.forEach(function (ele) {
//     ele.classList.remove("active");
//   })
  
//   if (itemsScrolled < listOpts.items.length) {
//     listOpts.items[itemsScrolled].classList.add("active");
//     window.location.href = listOpts.items[itemsScrolled].childNodes[1].getAttribute("href")
//   }

//   if (itemsScrolled > listOpts.items.length - 3) {
    var node;
    for ( var _x = 0; _x <= itemsMax - 1; _x++ ) {
        
      node = listOpts.items[_x];
      
    //   if ( !cloned ) {
        node = listOpts.items[_x].cloneNode(true);
    //   }
            
      scrollUl.appendChild(node);
    }
    
    initItems(cloned);
    cloned = true; 
    itemsScrolled = 0;
    
  }
// }

function initItems (scrollSmooth) {
  
  listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
  listOpts.itemHeight = listOpts.items[0].clientHeight;
  listOpts.itemWidth = listOpts.items[0].clientWidth;
  listOpts.itemCount = listOpts.items.length;
  
  if (!itemsMax) {
    itemsMax = listOpts.itemCount;
  }
  
  if (scrollSmooth) {
    var seamLessScrollPoint = ((itemsMax - 3) * listOpts.itemHeight);
    scrollW.scrollTop = seamLessScrollPoint;
  }      
  
}

document.addEventListener("DOMContentLoaded", function(event) {
//   initItems();
//   scrollW.onscroll = scrollWrap;
//   document.getElementById("wrap-scroll").scrollLeft = document.getElementById("active-el").offsetLeft;
// document.getElementById("wrap-scroll").scrollLeft = 

var distanceOfElementFromLeft = document.getElementById("ul-scroll").querySelector('#active-el').offsetLeft;
var resultingElementFromLeft = (document.body.clientWidth - document.getElementById("ul-scroll").querySelector('#active-el').clientWidth)/2;
var distanceToScroll = distanceOfElementFromLeft - resultingElementFromLeft + 0.05*document.body.clientWidth;
document.getElementById("wrap-scroll").scrollLeft = Math.round(distanceToScroll) - 5;
});
*/


/* Entry Point*/
import Cart from './views/Cart';
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
        // for (i = 0; i < slides.length; i++) {
            // slides[i].style.display = "none";
        // }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[n].style.right =  '25vw';
        slides[n + 1 < slides.length ? n + 1 : 0].style.right = '-45vw';
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
