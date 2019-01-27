//
import anime from './lib/anime';

function shapeMorph () {

    if (document.getElementById('flavours-svg')) {
        var morphing = anime({
            targets: '#flavours-svg > path',
            scale: 1.05, //scaleY: 2.5 for mobile // 1.2 for desktop
            d: [
                {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
                {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-404.437,33.266-404.437,33.266s-84.744,101.563-276.344,37.563c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
                {value: "M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"},
                
            ],
            easing: 'easeOutQuad',
            duration: 9000,
            endDelay: 1000,
            direction: 'alternate',
            loop: true
        });
    }

}

document.addEventListener('DOMContentLoaded', () => {
    shapeMorph();
});
    // if ($('.shape-morph').length > 0) {
    //     var morphing = anime({
    //         targets: '.scene, .scene-small',
    //         d: [
    //             { value: 'M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z' },
    //             { value: 'M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z' },
    //             { value: 'M 1066,436 C 1051,543.8 976.5,664.5 873.6,700.1 761,739.1 636.4,655.8 529.5,603.1 441.6,559.8 325.8,520.1 293.8,427.5 263.1,338.4 294.5,213.4 368.2,154.8 520.7,33.48 790.1,23.76 952.4,131.7 1043,191.7 1081,328.8 1066,436 Z' },
    //             { value: 'M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z ' }
    //         ],
    //         easing: 'easeOutQuad',
    //         duration: 9000,
    //         loop: true
    //     });
    // }
//     console.log('start morphing bitch');
// }

// shapeMorph();


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


/* Entry Point
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
        
        if(slides[n]) slides[n].style.right =  '25vw';
        if(slides[n]) slides[n + 1 < slides.length ? n + 1 : 0].style.right = '-45vw';
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

*/