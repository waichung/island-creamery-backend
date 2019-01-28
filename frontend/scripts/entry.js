//
import anime from './lib/anime';

const isMobile = screen.width < 414;
const isTablet = screen.width < 1280 && screen.width > 414;
const isDesk = screen.width >= 1280;

function shapeFillerMorph () {

    if (document.getElementById('filler-svg')) {
        if (isMobile) {
            var morphing = anime({
                targets: '.filler-svg > path',
                scaleY: 2.5,
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
        } else if (isDesk) {
            var morphing = anime({
                targets: '.filler-svg > path',
                scale: 1.06,
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

}

function shapeHeaderMorph () {

    if (document.getElementById('morph')) {
        var morphing = anime({
            targets: '.intro-lick > .morph',
            translateY: 30,
            scale: 1.3, //scaleY: 2.5 for mobile // 1.2 for desktop
            d: [
                {value: "M1919.8,443.2s66.967,172.732-295.233,172.732c-297.7,0-173.343,159.132-347.922,207.43s-185.7,24.659-377.3-39.341c-139-46.4-306.872,35.951-503.172,87.351C145.569,950.072,0,632.1,0,632.1V0H1919.8Z"},
                
            ],
            easing: 'easeInOutSine',
            duration: 9000,
            delay: 100,
            endDelay: 1000,
            direction: 'alternate',
            loop: true
        });
    }

}

function shapeContactMorph () {

    if (document.getElementById('morph')) {
        var morphing = anime({
            targets: '.intro-lick > .morph-img',
            d: [
                {value: "M1919.8,510.678s90.9,247.1-271.3,247.1c-297.7,0-168.541,62.711-343.12,111.009s-219.883,28.234-411.483-35.766c-139-46.4-271.642,20.974-467.942,72.374C175.351,984.1,0,716.786,0,716.786V0H1919.8Z"},
            ],
            easing: 'easeInOutSine',
            duration: 9000,
            delay: 100,
            endDelay: 1000,
            direction: 'alternate',
            loop: true
        });
    }

}

function shapeFooterMorph() {

    if (document.getElementById('footer-svg-container')) {
        var morphing = anime({
            targets: '#footer-svg > path',
            d: [
                {value: "M794,343.155s-44.4,18.538-55.2,78.022c-5,24.372-7.6,46.508-7.6,46.508s-2.5,28.57,21.1,42.8,55,42.637,128.5,48.307c163.7,10.468,238.1-42.255,238.1-42.255s86.2-44.981,67.1-83.2c-19.1-38.166-19-43.236-69.6-73.442-50.6-30.151-77.6-40.129-107-38.657-29.3,1.472-43.1.164-84.5-1.418C883.5,318.293,818.713,335.2,794,343.155Z"},
                {value: "M790.225,362.7s-41.734,34-51.886,143.1c-4.7,44.7-7.144,85.3-7.144,85.3s-2.35,52.4,19.833,78.5,51.7,78.2,120.784,88.6c153.871,19.2,223.8-77.5,223.8-77.5s81.024-82.5,63.071-152.6c-17.953-70-17.859-79.3-65.421-134.7-47.562-55.3-72.94-73.6-100.575-70.9-27.541,2.7-40.512.3-79.426-2.6C874.351,317.1,813.454,348.105,790.225,362.7Z"},
            ],
            easing: 'easeInOutSine',
            duration: 9000,
            delay: 100,
            endDelay: 1000,
            direction: 'alternate',
            loop: true
        });
    }

}

document.addEventListener('DOMContentLoaded', () => {
    shapeFillerMorph();
    // shapeHeaderMorph();
    shapeContactMorph();
    shapeFooterMorph();
});

const flavourCloud = document.getElementsByClassName('flavours-cloud')[0];

flavourCloud.addEventListener('click', (e) => {
    if (e && e.target) {
        const flavourId = e.target.getAttribute('id');
        const allIceCreamFlavours = document.getElementsByClassName('ice-cream');
        for (var i=0; i<allIceCreamFlavours.length; i++) {
            allIceCreamFlavours[i].classList.remove('active');
            if (allIceCreamFlavours[i].classList.contains(flavourId)) {
                allIceCreamFlavours[i].classList.add('active');
            }
        }
    }
});




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