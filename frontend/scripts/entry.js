import SmoothScrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

import welcome from './universe';
import about from './about';
import shop from './shop';
import home from './home';
import contact from './contact';


class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';
  
    static defaultOptions = {
      direction: null,
    };
  
    transformDelta(delta) {
        delta['x'] = 0;
  
      return { ...delta };
    }
  }

SmoothScrollbar.use(DisableScrollPlugin);

document && document.addEventListener('DOMContentLoaded', () => {
    welcome();
    about();
    shop();
    home();
    contact();

    const main = document.querySelector('.main-stuff');
    const scrollbar = SmoothScrollbar.init(main, { damping: 0.1 });

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


});


// function shapeFillerMorph () {

//     if (document.getElementById('filler-svg')) {
//         if (isMobile) {
//             var morphing = anime({
//                 targets: '.filler-svg > path',
//                 scaleY: 1.8,
//                 d: [
//                     // {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
//                     // {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-404.437,33.266-404.437,33.266s-84.744,101.563-276.344,37.563c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
//                     {value: "M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"},
                    
//                 ],
//                 easing: 'easeOutQuad',
//                 duration: 9000,
//                 endDelay: 1000,
//                 direction: 'alternate',
//                 loop: true
//             });
//         } else if (isDesk) {
//             var morphing = anime({
//                 targets: '.filler-svg > path',
//                 scale: 1.1,
//                 d: [
//                     // {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
//                     {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-82.943-17.707-253.138,0s-236.043,134.828-427.643,70.828c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
//                     // {value: "M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"},
                    
//                 ],
//                 easing: 'easeOutQuad',
//                 duration: 9000,
//                 endDelay: 1000,
//                 direction: 'alternate',
//                 loop: true
//             });
//         }
//     }

// }

// function shapeHeaderMorph () {

//     if (document.getElementById('morph')) {
//         var morphing = anime({
//             targets: '.intro-lick > .morph',
//             // translateY: 100,
//             scale: 1.3, //scaleY: 2.5 for mobile // 1.2 for desktop
//             d: [
//                 {value: "M1919.8,443.2s66.967,172.732-295.233,172.732c-297.7,0-173.343,159.132-347.922,207.43s-185.7,24.659-377.3-39.341c-139-46.4-306.872,35.951-503.172,87.351C145.569,950.072,0,632.1,0,632.1V0H1919.8Z"},
                
//             ],
//             easing: 'easeInOutSine',
//             duration: 9000,
//             // delay: 100,
//             endDelay: 1000,
//             direction: 'alternate',
//             loop: true
//         });
//     }

// }

// function shapeContactMorph () {

//     if (document.getElementById('morph')) {
//         var morphing = anime({
//             targets: '.intro-lick > .morph-img',
//             d: [
//                 {value: "M1919.8,510.678s90.9,247.1-271.3,247.1c-297.7,0-168.541,62.711-343.12,111.009s-219.883,28.234-411.483-35.766c-139-46.4-271.642,20.974-467.942,72.374C175.351,984.1,0,716.786,0,716.786V0H1919.8Z"},
//             ],
//             easing: 'easeInOutSine',
//             duration: 9000,
//             delay: 100,
//             endDelay: 1000,
//             direction: 'alternate',
//             loop: true
//         });
//     }

// }

// function shapeFooterMorph() {

//     if (document.getElementById('footer-svg-container')) {
//         var morphing = anime({
//             targets: '#footer-svg > path',
//             d: [
//                 {value: "M794,343.155s-44.4,18.538-55.2,78.022c-5,24.372-7.6,46.508-7.6,46.508s-2.5,28.57,21.1,42.8,55,42.637,128.5,48.307c163.7,10.468,238.1-42.255,238.1-42.255s86.2-44.981,67.1-83.2c-19.1-38.166-19-43.236-69.6-73.442-50.6-30.151-77.6-40.129-107-38.657-29.3,1.472-43.1.164-84.5-1.418C883.5,318.293,818.713,335.2,794,343.155Z"},
//                 {value: "M790.225,362.7s-41.734,34-51.886,143.1c-4.7,44.7-7.144,85.3-7.144,85.3s-2.35,52.4,19.833,78.5,51.7,78.2,120.784,88.6c153.871,19.2,223.8-77.5,223.8-77.5s81.024-82.5,63.071-152.6c-17.953-70-17.859-79.3-65.421-134.7-47.562-55.3-72.94-73.6-100.575-70.9-27.541,2.7-40.512.3-79.426-2.6C874.351,317.1,813.454,348.105,790.225,362.7Z"},
//             ],
//             easing: 'easeInOutSine',
//             duration: 9000,
//             delay: 100,
//             endDelay: 1000,
//             direction: 'alternate',
//             loop: true
//         });
//     }

// }

// const LOCATION = {};
// LOCATION.intro = document.querySelector('.location--content--intro');
// LOCATION.shape = LOCATION.intro && LOCATION.intro.querySelector('svg.location--shape');
// LOCATION.path = LOCATION.shape && LOCATION.shape.querySelector('path');
// if (LOCATION.shape)LOCATION.shape.style.transformOrigin = '50% 0%';

// const one = anime({
//     targets: LOCATION.intro,
//     duration: 1600,
//     easing: 'easeInOutSine',
//     translateY: '-220vh', 
//     autoplay: false,
// });

// const two = anime({
//     targets: LOCATION.shape,
//     easing: 'easeOutQuart',
//     scaleY: [
//         {value: [0,1], duration: 800},
//         {value: 0, duration: 1200, easing: 'easeOutElastic', elasticity: 700}
//     ], 
//     autoplay: false,
// });

// // const three = anime({
// //     targets: LOCATION.path,
// //     duration: 800,
// //     easing: 'easeInOutQuad',
// //     d: DOM.path.getAttribute('pathdata:id'), 
// //     autoplay: false,
// // });

// const play = (progress) => {

//     one.seek(1 * one.duration * progress);
//     two.seek(1 * two.duration * progress);
//     three.seek(2 * three.duration * progress);

// }

// window.addEventListener('scroll', () => {
//     //option 1
//     // const triggerEl = 'flavours-content-container';
//     // const targetEl = 'location';

//     // const distanceFromTriggerToTop = window.pageYOffset + document.getElementsByClassName(triggerEl)[0].getBoundingClientRect().top;

//     // const distanceFromTargetToTop = window.pageYOffset + document.getElementsByClassName(targetEl)[0].getBoundingClientRect().top;

//     // const totalScrollDistance = document.getElementsByClassName(targetEl)[0].scrollHeight - document.getElementsByClassName(targetEl)[0].clientHeight + (distanceFromTargetToTop - distanceFromTriggerToTop);

//     // const scrolledDistanceFromTrigger = document.querySelector('html').scrollTop - distanceFromTriggerToTop;

//     // const scrollProgress = Math.min(1,scrolledDistanceFromTrigger/totalScrollDistance);

//     // if (scrolledDistanceFromTrigger > 1) {
//     //     play(scrollProgress);
//     //     LOCATION.intro.style.display = 'block';

//     // } else if (scrolledDistanceFromTrigger < 0) {

        
//     // }

    
//     //option 2
//     const targetEl = 'location';

//     const distanceFromTargetToTop = window.pageYOffset + document.getElementsByClassName(targetEl)[0].getBoundingClientRect().top;

//     const totalScrollDistance = document.getElementsByClassName(targetEl)[0].scrollHeight - document.getElementsByClassName(targetEl)[0].clientHeight;

//     const scrolledDistanceFromTarget = document.querySelector('html').scrollTop - distanceFromTargetToTop;

//     const scrollProgress = Math.min(1,scrolledDistanceFromTarget/(totalScrollDistance*2));

//     if (scrolledDistanceFromTarget > 1) {
//         // play(scrollProgress);
//         // LOCATION.intro.style.display = 'block';

//     } else if (scrolledDistanceFromTarget < 0) {

//         // LOCATION.intro.style.display = 'none';
        
//     }

// });

// document && document.addEventListener('DOMContentLoaded', () => {

    // if (isMobile)
    //     var slider = tns({

    //         container: '.places',
    //         slideBy: 'page',
    //         mouseDrag: true,
    //         swipeAngle: false,
    //         // autoplay: true,
    //         speed: 400, 
    //         loop: true
        
    //     });
    
//     if(window.location.href.includes('product')) {

//         window.scrollTo(0, 500);
        

//     }

//     if (document.getElementsByClassName('sore-thumb')[0]) document.getElementsByClassName('sore-thumb')[0].style.display = 'none';
//     setTimeout(() => welcome(), 0);
//     about();
//     shop();
//     // shapeNavMenuMorph();
// });

// const changeFlavour = (flavourId, name) => {

//     const shouldOrderSpan = document.getElementsByClassName('should-order')[0];
//     shouldOrderSpan.id = flavourId;
//     shouldOrderSpan.innerHTML = name;
//     const allIceCreamFlavours = document.getElementsByClassName('ice-cream');
//     for (var i=0; i<allIceCreamFlavours.length; i++) {
//         allIceCreamFlavours[i].classList.remove('active');
//         if (allIceCreamFlavours[i].classList.contains(flavourId)) {
//             allIceCreamFlavours[i].classList.add('active');
//         }
//     }

// };

// const flavourCloud = document.getElementsByClassName('flavours-cloud')[0];

// flavourCloud && flavourCloud.addEventListener('click', (e) => {

//     if (e && e.target && !e.target.classList.contains('flavours-cloud')) {

//         const flavourId = e.target.getAttribute('id');
//         const name = e.target.innerHTML;
//         changeFlavour(flavourId, name);

//     }

// });

// const surpriseLink = document.getElementById('surprise');

// surpriseLink && surpriseLink.addEventListener('click', (e) => {

//     e.preventDefault();
//     if (e && e.target) {
        
//         const random = Math.floor(Math.random() * Math.floor(flavourCloud.children.length));
//         const randomFlavourId =  flavourCloud.children[random].getAttribute('id');
//         const randomName =  flavourCloud.children[random].innerHTML;
//         changeFlavour(randomFlavourId, randomName);
//         const captions = surpriseLink.getAttribute('captions');
//         const listOfCaptions = captions.split(',');
//         surpriseLink.innerHTML = listOfCaptions[Math.floor(Math.random() * Math.floor(listOfCaptions.length))];      

//     }

// });



// // Lib
// // import Scrollbar from 'smooth-scrollbar';
// // import HubSlider from './lib/HubSlider';

// // // Utils
// // import InteractionManager from './utils/InteractionManager';

// // // Views
// // import Stories from './views/Stories';
// // import Journey from './views/Journey';
// // import Header from './views/Header';

// // import Product from './views/product/Product';

// /* SECTION SHOP PAGE PRIMARY FILTER */
// // var scrollW = document.getElementById("wrap-scroll");
// // var scrollUl = document.getElementById("ul-scroll");
// // var itemsScrolled,
// //     itemsMax,
// //     cloned = false;

// // var listOpts = {
// //   itemCount: null,
// //   itemHeight: null,
// //   items: [],
// // };

// // function scrollWrap () {
  

// //   itemsScrolled = Math.ceil( (scrollW.scrollLeft + listOpts.itemWidth / 2 ) / listOpts.itemWidth);
 
// //   if (this.scrollLeft < 1) {
// //     itemsScrolled = 0;
// //   }
     
// // //   listOpts.items.forEach(function (ele) {
// // //     ele.classList.remove("active");
// // //   })
  
// // //   if (itemsScrolled < listOpts.items.length) {
// // //     listOpts.items[itemsScrolled].classList.add("active");
// // //     window.location.href = listOpts.items[itemsScrolled].childNodes[1].getAttribute("href")
// // //   }

// // //   if (itemsScrolled > listOpts.items.length - 3) {
// //     var node;
// //     for ( var _x = 0; _x <= itemsMax - 1; _x++ ) {
        
// //       node = listOpts.items[_x];
      
// //     //   if ( !cloned ) {
// //         node = listOpts.items[_x].cloneNode(true);
// //     //   }
            
// //       scrollUl.appendChild(node);
// //     }
    
// //     initItems(cloned);
// //     cloned = true; 
// //     itemsScrolled = 0;
    
// //   }
// // // }

// // function initItems (scrollSmooth) {
// //   listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
// //   listOpts.itemHeight = listOpts.items[0].clientHeight;
// //   listOpts.itemWidth = listOpts.items[0].clientWidth;
// //   listOpts.itemCount = listOpts.items.length;
  
// //   if (!itemsMax) {
// //     itemsMax = listOpts.itemCount;
// //   }
  
// //   if (scrollSmooth) {
// //     var seamLessScrollPoint = ((itemsMax - 3) * listOpts.itemHeight);
// //     scrollW.scrollTop = seamLessScrollPoint;
// //   }      
  
// // }

// document.addEventListener("DOMContentLoaded", function(event) {

// //   initItems();
// //   scrollW.onscroll = scrollWrap;
// //   document.getElementById("wrap-scroll").scrollLeft = document.getElementById("active-el").offsetLeft;
// // document.getElementById("wrap-scroll").scrollLeft = 

// // var distanceOfElementFromLeft = document.getElementById("ul-scroll") && document.getElementById("ul-scroll").querySelector('#active-el').offsetLeft;

// // var resultingElementFromLeft = document.getElementById("ul-scroll") && (document.body.clientWidth - document.getElementById("ul-scroll").querySelector('#active-el').clientWidth)/2;
// // var distanceToScroll = distanceOfElementFromLeft - resultingElementFromLeft + 0.05*document.body.clientWidth;

// // if (document.getElementById("wrap-scroll"))
// // document.getElementById("wrap-scroll").scrollLeft = Math.round(distanceToScroll) - 5;
// // });


// // function initLocationSlider () {

// //     var placesContainer =  document.getElementsByClassName('places')[0];
// //     // placesContainer && placesContainer.addEventListener('s');
// //     var slideToShow = 0;
// //     var slides = document.getElementsByClassName('place');
// //     var dots = document.getElementsByClassName("location-dot");
// //     autoSlide(slideToShow);

// //     function showSlide(n) {

// //         if (slides[n]) {

// //             for(var i=0; i<slides.length; i++) {

// //                 slides[i].classList.remove('active');
// //                 slides[i].classList.remove('next');
// //                 slides[i].classList.remove('last');
// //                 dots[i].classList.remove('active');

// //             }

// //             const activeIndex = n;
// //             const lastIndex = n-1 >=0 ? n - 1 : slides.length - 1;
// //             const nextIndex = n+1 < slides.length ? n + 1 : 0; 

// //             slides[activeIndex].classList.add('active');
// //             dots[activeIndex].classList.add('active');
// //             slides[lastIndex].classList.add('last');
// //             slides[nextIndex].classList.add('next');



// //             slideToShow ++;
// //         } else {

// //             slideToShow = 0;

// //         }

// //     }

// //     function autoSlide() {
// //         // slideToShow = slideToShow <= slides.length ? slideToShow : 0;
// //         showSlide(slideToShow);
// //         setTimeout(autoSlide, 3000);
// //     }
// // }


// /* Entry Point */
// // import Cart from './views/Cart';
// document.addEventListener('DOMContentLoaded', () => {

//     // initLocationSlider();
//     /* start of about page slide algo */
    
//      /*end of about page slide algo */

//     // const quantityPlusMinus = document.getElementsByClassName('qty-toggle')[0];

//     // const updateCartBtn = document.querySelector("[name='update_cart']");
    
//     // if(quantityPlusMinus) quantityPlusMinus.addEventListener('click', () => {
//     //     updateCartBtn.click();
//     // });

//     // HubSlider();

//     // const announcementBar = document.getElementById('announcements');
//     // const closeButton = document.getElementById('close-announcements');

//     // closeButton.addEventListener('click', () => {
//     //     announcementBar.classList.add("hide");
//     // });

//     // DOM Elements
//     // const header = new Header();

//     // Page Containers
//     // const storiesContainer = document.querySelector('[data-stories="container"]');
//     // const journeyContainer = document.querySelector('[data-journey="container"]');

//     // const productContainer = document.querySelector('[data-product="container"]');
//     // const cartContainer = document.querySelector('[data-cart="container"]');
//     // const checkoutContainer = document.querySelector('[data-checkout="container"]');

//     // const main = document.querySelector('body');
//         //   main.style.height = '100vh';

//     // Smooth Scrollbar
//     // const scrollbar = Scrollbar.init(main, { damping: 0.2 });

//     // if(journeyContainer) new Journey(journeyContainer, scrollbar);
//     // if(storiesContainer) new Stories(storiesContainer, scrollbar);
//     // if(productContainer) new Product(productContainer, scrollbar);
//     // if(cartContainer) new Cart(cartContainer, scrollbar);
//     // if(cartContainer) new Cart(cartContainer);
// }); 


// //containerised animation code 
// //
// // import anime from './lib/anime';

// // const isMobile = screen.width < 414;
// // const isTablet = screen.width < 1280 && screen.width > 414;
// // const isDesk = screen.width >= 1280;

// // function shapeFillerMorph () {

// //     if (document.getElementById('filler-svg')) {
// //         if (isMobile) {
// //             var morphing = anime({
// //                 targets: '.filler-svg > path',
// //                 scaleY: 1.8,
// //                 d: [
// //                     // {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
// //                     // {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-404.437,33.266-404.437,33.266s-84.744,101.563-276.344,37.563c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
// //                     {value: "M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"},
                    
// //                 ],
// //                 easing: 'easeOutQuad',
// //                 duration: 9000,
// //                 endDelay: 1000,
// //                 direction: 'alternate',
// //                 loop: true
// //             });
// //         } else if (isDesk) {
// //             var morphing = anime({
// //                 targets: '.filler-svg > path',
// //                 scale: 1.1,
// //                 d: [
// //                     // {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
// //                     {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-82.943-17.707-253.138,0s-236.043,134.828-427.643,70.828c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
// //                     // {value: "M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"},
                    
// //                 ],
// //                 easing: 'easeOutQuad',
// //                 duration: 9000,
// //                 endDelay: 1000,
// //                 direction: 'alternate',
// //                 loop: true
// //             });
// //         }
// //     }

// // }

// // function shapeHeaderMorph () {

// //     if (document.getElementById('morph')) {
// //         var morphing = anime({
// //             targets: '.intro-lick > .morph',
// //             // translateY: 100,
// //             scale: 1.3, //scaleY: 2.5 for mobile // 1.2 for desktop
// //             d: [
// //                 {value: "M1919.8,443.2s66.967,172.732-295.233,172.732c-297.7,0-173.343,159.132-347.922,207.43s-185.7,24.659-377.3-39.341c-139-46.4-306.872,35.951-503.172,87.351C145.569,950.072,0,632.1,0,632.1V0H1919.8Z"},
                
// //             ],
// //             easing: 'easeInOutSine',
// //             duration: 9000,
// //             // delay: 100,
// //             endDelay: 1000,
// //             direction: 'alternate',
// //             loop: true
// //         });
// //     }

// // }

// // function shapeContactMorph () {

// //     if (document.getElementById('morph')) {
// //         var morphing = anime({
// //             targets: '.intro-lick > .morph-img',
// //             d: [
// //                 {value: "M1919.8,510.678s90.9,247.1-271.3,247.1c-297.7,0-168.541,62.711-343.12,111.009s-219.883,28.234-411.483-35.766c-139-46.4-271.642,20.974-467.942,72.374C175.351,984.1,0,716.786,0,716.786V0H1919.8Z"},
// //             ],
// //             easing: 'easeInOutSine',
// //             duration: 9000,
// //             delay: 100,
// //             endDelay: 1000,
// //             direction: 'alternate',
// //             loop: true
// //         });
// //     }

// // }

// // function shapeFooterMorph() {

// //     if (document.getElementById('footer-svg-container')) {
// //         var morphing = anime({
// //             targets: '#footer-svg > path',
// //             d: [
// //                 {value: "M794,343.155s-44.4,18.538-55.2,78.022c-5,24.372-7.6,46.508-7.6,46.508s-2.5,28.57,21.1,42.8,55,42.637,128.5,48.307c163.7,10.468,238.1-42.255,238.1-42.255s86.2-44.981,67.1-83.2c-19.1-38.166-19-43.236-69.6-73.442-50.6-30.151-77.6-40.129-107-38.657-29.3,1.472-43.1.164-84.5-1.418C883.5,318.293,818.713,335.2,794,343.155Z"},
// //                 {value: "M790.225,362.7s-41.734,34-51.886,143.1c-4.7,44.7-7.144,85.3-7.144,85.3s-2.35,52.4,19.833,78.5,51.7,78.2,120.784,88.6c153.871,19.2,223.8-77.5,223.8-77.5s81.024-82.5,63.071-152.6c-17.953-70-17.859-79.3-65.421-134.7-47.562-55.3-72.94-73.6-100.575-70.9-27.541,2.7-40.512.3-79.426-2.6C874.351,317.1,813.454,348.105,790.225,362.7Z"},
// //             ],
// //             easing: 'easeInOutSine',
// //             duration: 9000,
// //             delay: 100,
// //             endDelay: 1000,
// //             direction: 'alternate',
// //             loop: true
// //         });
// //     }

// // }

// // function shapeNavMenuMorph () {

// //     if (document.getElementById('nav-menu-svg')) {

// //         var morphing = anime({
// //             targets: '#nav-menu-svg > path',
// //             scaleY: [
// //                 {value:[0.8,1.25],duration: 4500,easing: 'easeInSine'},
// //                 {value:0.9,duration: 4500,easing: 'easeOutSine'}
// //             ], 
// //             easing: 'easeInOutSine',
// //             duration: 9000,
// //             // delay: 1000,
// //         });

// //     }

// // }

// // const DOM = {};
// // DOM.intro = document.querySelector('.content--intro');
// // DOM.shape = DOM.intro.querySelector('svg.shape');
// // DOM.path = DOM.shape.querySelector('path');
// // DOM.shape.style.transformOrigin = '50% 0%';

// // window.addEventListener('scroll', () => {
// //     const targetEl = 'flavours-cloud';
// //     //get distance from top of element
// //     const targetDistanceFromTop = window.pageYOffset + document.getElementsByClassName(targetEl)[0].getBoundingClientRect().top;
// //     const currentDistanceFromTop = document.querySelector('html').scrollTop;
// //     const totalTargetScrollDistance = document.getElementsByClassName(targetEl)[0].scrollHeight - document.getElementsByClassName(targetEl)[0].clientHeight;
// //     const scrollDistanceFromTarget = currentDistanceFromTop - targetDistanceFromTop;
// //     const scrollProgress = Math.min(1, scrollDistanceFromTarget/totalTargetScrollDistance);
// //     if(scrollDistanceFromTarget > 1) {
// //         const one = anime({
// //             targets: DOM.intro,
// //             duration: 1600,
// //             easing: 'easeInOutCubic',
// //             translateY: [{
// //                 value: [500, 80]
// //             }], 
// //             autoplay: false,
// //         });
        
// //         const two = anime({
// //             targets: DOM.shape,
// //             easing: 'easeInOutCubic',
// //             scaleY: [
// //                 {value: [0,1], duration: 800},
// //                 {value: 1, duration: 1200, easing: 'easeOutElastic', elasticity: 700}
// //             ], 
// //             autoplay: false,
// //         });
        
// //         const three = anime({
// //             targets: DOM.path,
// //             duration: 800,
// //             easing: 'easeInOutQuad',
// //             d: DOM.path.getAttribute('pathdata:id'), 
// //             autoplay: false,
// //         });
        
// //         const play = (progress) => {
// //             console.log(progress);
// //             one.seek(one.duration * progress);
// //             two.seek(two.duration * progress);
// //             three.seek(three.duration * Math.min(2 * progress, 1));
// //             // four.seek(four.duration * progress);
        
// //         }
// //         DOM.intro.style.display = 'block';
// //         play(scrollProgress);
// //     } else if (scrollDistanceFromTarget < 1) {
// //         DOM.intro.style.display = 'none';
// //     }

// // });


// // function welcome () {

// //     // const dripFactor = isMobile ? 2.4 : 3.5;

// //     // anime({ 
// //     //     targets: DOM.intro,
// //     //     duration: 5000,
// //     //     easing: 'easeInOutSine',
// //     //     translateY: '-200vh', 
// //     // });

// //     // anime({
// //     //     targets: DOM.shape,
// //     //     scaleY: [
// //     //         {value: [dripFactor, 0], duration: 5000,easing: 'easeInOutSine'},
// //     //     ], 
// //     // });

// //     // anime({
// //     //     targets: DOM.path,
// //     //     duration: 4000,
// //     //     easing: 'easeOutSine',
// //     //     d: DOM.path.getAttribute('pathdata:id'),
// //     //     complete: () => {
// //     //         document.getElementsByClassName('main-stuff')[0].style.position = 'static';
// //     //         DOM.intro.style.display = 'none'; 
// //     //         if (document.getElementsByClassName('sore-thumb')[0])document.getElementsByClassName('sore-thumb')[0].style.display = 'block';
// //     //         shapeFillerMorph();
// //     //         shapeHeaderMorph();
// //     //         shapeContactMorph();
// //     //         shapeFooterMorph();
// //     //     }
// //     // });

// //     anime({
// //         targets: DOM.intro,
// //         duration: 1600,
// //         easing: 'easeInOutCubic',
// //         translateY: '-200vh', 
// //     });

// //     anime({
// //         targets: DOM.shape,
// //         easing: 'easeInOutCubic',
// //         scaleY: [
// //             {value: [0,1], duration: 800},
// //             {value: 0, duration: 1200, easing: 'easeOutElastic', elasticity: 700}
// //         ], 
// //     });

// //     anime({
// //         targets: DOM.path,
// //         duration: 800,
// //         easing: 'easeInOutQuad',
// //         d: DOM.path.getAttribute('pathdata:id'), 
// //     });

// //     // anime({
// //     //     targets: [DOM.intro.querySelector('.content__inner'), DOM.shape],
// //     //     duration: 1300,
// //     //     easing: 'linear',
// //     //     backgroundColor: (t,i) => {
// //     //         if ( i === 0 ) return '#fff1fb';
// //     //     },
// //     //     fill: (t,i) => {
// //     //         if ( i === 1 ) return '#fff1fb';
// //     //     }
// //     // });
// // }

// // document && document.addEventListener('DOMContentLoaded', () => {
// //     if (document.getElementsByClassName('sore-thumb')[0])document.getElementsByClassName('sore-thumb')[0].style.display = 'none';
// //     setTimeout(() => welcome(), 0);
// //     // shapeNavMenuMorph();
// // });

// // const hamburgerIcon = document.getElementsByClassName('nav-btn')[0];
// // hamburgerIcon && hamburgerIcon.addEventListener('click', () => {
// //     shapeNavMenuMorph();
// // });

// // const flavourCloud = document.getElementsByClassName('flavours-cloud')[0];

// // flavourCloud && flavourCloud.addEventListener('click', (e) => {
// //     if (e && e.target) {
// //         const flavourId = e.target.getAttribute('id');
// //         const shouldOrderSpan = document.getElementsByClassName('should-order')[0];
// //         shouldOrderSpan.id = flavourId;
// //         shouldOrderSpan.innerHTML = flavourId;
// //         const allIceCreamFlavours = document.getElementsByClassName('ice-cream');
// //         for (var i=0; i<allIceCreamFlavours.length; i++) {
// //             allIceCreamFlavours[i].classList.remove('active');
// //             if (allIceCreamFlavours[i].classList.contains(flavourId)) {
// //                 allIceCreamFlavours[i].classList.add('active');
// //             }
// //         }
// //     }
// // });



// // // Lib
// // // import Scrollbar from 'smooth-scrollbar';
// // import HubSlider from './lib/HubSlider';

// // // // Utils
// // // import InteractionManager from './utils/InteractionManager';

// // // // Views
// // // import Stories from './views/Stories';
// // // import Journey from './views/Journey';
// // // import Header from './views/Header';

// // // import Product from './views/product/Product';

// // /* SECTION SHOP PAGE PRIMARY FILTER */
// // var scrollW = document.getElementById("wrap-scroll");
// // var scrollUl = document.getElementById("ul-scroll");
// // var itemsScrolled,
// //     itemsMax,
// //     cloned = false;

// // var listOpts = {
// //   itemCount: null,
// //   itemHeight: null,
// //   items: [],
// // };

// // function scrollWrap () {
  

// //   itemsScrolled = Math.ceil( (scrollW.scrollLeft + listOpts.itemWidth / 2 ) / listOpts.itemWidth);
 
// //   if (this.scrollLeft < 1) {
// //     itemsScrolled = 0;
// //   }
     
// // //   listOpts.items.forEach(function (ele) {
// // //     ele.classList.remove("active");
// // //   })
  
// // //   if (itemsScrolled < listOpts.items.length) {
// // //     listOpts.items[itemsScrolled].classList.add("active");
// // //     window.location.href = listOpts.items[itemsScrolled].childNodes[1].getAttribute("href")
// // //   }

// // //   if (itemsScrolled > listOpts.items.length - 3) {
// //     var node;
// //     for ( var _x = 0; _x <= itemsMax - 1; _x++ ) {
        
// //       node = listOpts.items[_x];
      
// //     //   if ( !cloned ) {
// //         node = listOpts.items[_x].cloneNode(true);
// //     //   }
            
// //       scrollUl.appendChild(node);
// //     }
    
// //     initItems(cloned);
// //     cloned = true; 
// //     itemsScrolled = 0;
    
// //   }
// // // }

// // function initItems (scrollSmooth) {
// //   listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
// //   listOpts.itemHeight = listOpts.items[0].clientHeight;
// //   listOpts.itemWidth = listOpts.items[0].clientWidth;
// //   listOpts.itemCount = listOpts.items.length;
  
// //   if (!itemsMax) {
// //     itemsMax = listOpts.itemCount;
// //   }
  
// //   if (scrollSmooth) {
// //     var seamLessScrollPoint = ((itemsMax - 3) * listOpts.itemHeight);
// //     scrollW.scrollTop = seamLessScrollPoint;
// //   }      
  
// // }

// // document.addEventListener("DOMContentLoaded", function(event) {

// // //   initItems();
// // //   scrollW.onscroll = scrollWrap;
// // //   document.getElementById("wrap-scroll").scrollLeft = document.getElementById("active-el").offsetLeft;
// // // document.getElementById("wrap-scroll").scrollLeft = 

// // var distanceOfElementFromLeft = document.getElementById("ul-scroll") && document.getElementById("ul-scroll").querySelector('#active-el').offsetLeft;

// // var resultingElementFromLeft = document.getElementById("ul-scroll") && (document.body.clientWidth - document.getElementById("ul-scroll").querySelector('#active-el').clientWidth)/2;
// // var distanceToScroll = distanceOfElementFromLeft - resultingElementFromLeft + 0.05*document.body.clientWidth;

// // if (document.getElementById("wrap-scroll"))
// // document.getElementById("wrap-scroll").scrollLeft = Math.round(distanceToScroll) - 5;
// // });


// // function initLocationSlider () {

// //     var placesContainer =  document.getElementsByClassName('places')[0];
// //     // placesContainer && placesContainer.addEventListener('s');
// //     var slideToShow = 0;
// //     var slides = document.getElementsByClassName('place');
// //     var dots = document.getElementsByClassName("location-dot");
// //     autoSlide(slideToShow);

// //     function showSlide(n) {

// //         if (slides[n]) {

// //             for(var i=0; i<slides.length; i++) {

// //                 slides[i].classList.remove('active');
// //                 slides[i].classList.remove('next');
// //                 slides[i].classList.remove('last');
// //                 dots[i].classList.remove('active');

// //             }

// //             const activeIndex = n;
// //             const lastIndex = n-1 >=0 ? n - 1 : slides.length - 1;
// //             const nextIndex = n+1 < slides.length ? n + 1 : 0; 

// //             slides[activeIndex].classList.add('active');
// //             dots[activeIndex].classList.add('active');
// //             slides[lastIndex].classList.add('last');
// //             slides[nextIndex].classList.add('next');



// //             slideToShow ++;
// //         } else {

// //             slideToShow = 0;

// //         }

// //     }

// //     function autoSlide() {
// //         // slideToShow = slideToShow <= slides.length ? slideToShow : 0;
// //         showSlide(slideToShow);
// //         setTimeout(autoSlide, 3000);
// //     }
// // }


// // /* Entry Point */
// // import Cart from './views/Cart';
// // document.addEventListener('DOMContentLoaded', () => {

// //     initLocationSlider();
// //     /* start of about page slide algo */
// //     var slideIndex = 0;
// //     autoSlide(slideIndex);

// //     // Thumbnail image controls
// //     function currentSlide(n) {
// //         showSlides(slideIndex = n);
// //     }

// //     function showSlides(n) {
// //         var i;
// //         var slides = document.getElementsByClassName("mySlides");
// //         var dots = document.getElementsByClassName("dot");
// //         if (n+1 > slides.length) {n = 0} 
// //         // for (i = 0; i < slides.length; i++) {
// //             // slides[i].style.display = "none";
// //         // }
// //         for (i = 0; i < dots.length; i++) {
// //             if(dots[i])
// //                 dots[i].className = dots[i].className.replace(" active", "");
// //         }
        
// //         if(slides[n]) {
// //             slides[n].style.right =  '25vw';
// //             slides[n + 1 < slides.length ? n + 1 : 0].style.right = '-45vw';
// //             if (isMobile) {
// //                 slides[n].style.display = 'none';
// //                 slides[n + 1 < slides.length ? n + 1 : 0].style.display = 'block';
// //             }
            
// //         }

// //         if(dots[n])
// //             dots[n].className += " active";

// //     }

// //     function autoSlide (n) {
// //         const slideNumber = n > document.getElementsByClassName("mySlides").length ? 0 : n;
// //         showSlides(slideNumber);
// //         setTimeout(() => {
// //             autoSlide(slideNumber + 1)
// //         }, 3000);
// //     }
      
// //     const listOfDots = document.getElementsByClassName('dot');

// //     listOfDots[0] && listOfDots[0].addEventListener('click', (e) => currentSlide(0));
// //     listOfDots[1] && listOfDots[1].addEventListener('click', (e) => currentSlide(1));
// //     listOfDots[2] && listOfDots[2].addEventListener('click', (e) => currentSlide(2));
// //      /*end of about page slide algo */

// //     const quantityPlusMinus = document.getElementsByClassName('qty-toggle')[0];

// //     const updateCartBtn = document.querySelector("[name='update_cart']");
    
// //     if(quantityPlusMinus) quantityPlusMinus.addEventListener('click', () => {
// //         updateCartBtn.click();
// //     });

// //     // HubSlider(); not using anymore

// //     // const announcementBar = document.getElementById('announcements');
// //     // const closeButton = document.getElementById('close-announcements');

// //     // closeButton.addEventListener('click', () => {
// //     //     announcementBar.classList.add("hide");
// //     // });

// //     // DOM Elements
// //     // const header = new Header();

// //     // Page Containers
// //     // const storiesContainer = document.querySelector('[data-stories="container"]');
// //     // const journeyContainer = document.querySelector('[data-journey="container"]');

// //     // const productContainer = document.querySelector('[data-product="container"]');
// //     const cartContainer = document.querySelector('[data-cart="container"]');
// //     // const checkoutContainer = document.querySelector('[data-checkout="container"]');

// //     const main = document.querySelector('body');
// //         //   main.style.height = '100vh';

// //     // Smooth Scrollbar
// //     // const scrollbar = Scrollbar.init(main, { damping: 0.2 });

// //     // if(journeyContainer) new Journey(journeyContainer, scrollbar);
// //     // if(storiesContainer) new Stories(storiesContainer, scrollbar);
// //     // if(productContainer) new Product(productContainer, scrollbar);
// //     // if(cartContainer) new Cart(cartContainer, scrollbar);
// //     if(cartContainer) new Cart(cartContainer);
// // }); 
