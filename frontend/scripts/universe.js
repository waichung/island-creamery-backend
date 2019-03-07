import anime from './lib/anime';
import Cart from './views/Cart';
import { isMobile, isDesk } from './utils/ScreenSizes';

function shapeFillerMorph () {

    if (document.getElementById('filler-svg')) {
        if (isMobile) {
            var morphing = anime({
                targets: '.filler-svg > path',
                scaleY: 1.8,
                d: [
                    // {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
                    // {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-404.437,33.266-404.437,33.266s-84.744,101.563-276.344,37.563c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
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
                translateY: -400,
                scaleY: 2,
                scaleX: 2,
                // d: [
                //     // {value: "M0,0H1919.8V144h0s33.056,234.531-329.144,234.531c-297.7,0-368.234,121.047-368.234,121.047s-119.837,162.656-311.437,98.656c-139-46.4-162.45-221.619-358.75-170.219C301.634,506.716,0,332.9,0,332.9Z"},
                //     {value: "M0,0H1919.8V144h0s119.759,284.016-242.441,284.016c-297.7,0-82.943-17.707-253.138,0s-236.043,134.828-427.643,70.828c-139-46.4-247.809-139.166-444.109-87.766C301.869,489.778,0,332.9,0,332.9Z"},
                //     // {value: "M0,0H1919.8V144h0s20,195.5-342.2,195.5c-297.7,0-417.4,152.1-417.4,152.1s-68.6,86.7-260.2,22.7c-139-46.4-171.45-113.5-367.75-62.1C281.65,530.9,0,357.906,0,357.906Z"},
                    
                // ],
                easing: 'easeOutSine',
                duration: 10000,
                endDelay: 1000,
                direction: 'alternate',
                loop: true
            });
        }
    }

}

function shapeHeaderMorph (type) {

    const animations = {
        home: {
            scale: 1.3,
            path: "M 1919.8 0 L 0 0 L 0 227.7 L 0 455.4 C 0 531.3 0 607.2 0 683.1 C 0 683.1 104.8 743.1 384.8 701 C 482.95 675.3 550.775 668.45 611.438 673.825 C 672.1 679.2 725.6 696.8 795.1 720 C 858.967 741.333 920.444 745.633 974.03 741.885 C 1027.615 738.137 1073.307 726.341 1105.604 715.481 C 1137.9 704.622 1156.8 694.7 1156.8 694.7 C 1156.8 694.7 1167.162 688.813 1186.691 682.261 C 1206.219 675.709 1234.912 668.494 1271.575 665.837 C 1308.237 663.181 1352.869 665.084 1404.272 676.77 C 1455.675 688.456 1513.85 709.925 1577.6 746.4 C 1814.3 868.2 1919.8 702.7 1919.8 702.7 L 1919.8 351.35 L 1919.8 0 L 1919.8 0"
        }, 
        menu: {
            scaleX: 1.1,
            translateY: -10,
            path: "M 0 683.1 C 0 683.1 26.2 698.1 87.4 707.837 C 148.6 717.575 244.8 722.05 384.8 701 C 482.95 675.3 550.775 668.45 611.438 673.825 C 672.1 679.2 725.6 696.8 795.1 720 C 853.548 739.523 909.995 744.781 960.223 742.66 C 1019.764 740.146 1070.567 727.262 1105.604 715.481 C 1137.9 704.622 1156.8 694.7 1156.8 694.7 C 1156.8 694.7 1167.162 688.813 1186.691 682.261 C 1206.219 675.709 1234.912 668.494 1271.575 665.837 C 1308.237 663.181 1352.869 665.084 1404.272 676.77 C 1455.675 688.456 1513.85 709.925 1577.6 746.4 C 1814.3 868.2 1919.8 702.7 1919.8 702.7 L 1919.8 351.35 L 1919.8 0 L 1919.8 0 L 0 0 L 0 341.55 L 0 683.1"
        },
        about: {
            scaleY: 0.99,
            translateY: -20,
            path: "M 1919.8 351.35 C 1919.8 468.467 1919.8 585.583 1919.8 702.7 C 1919.8 702.7 1814.3 868.2 1577.6 746.4 C 1513.85 709.925 1455.675 688.456 1404.272 676.77 C 1352.869 665.084 1308.237 663.181 1271.575 665.837 C 1234.912 668.494 1206.219 675.709 1186.691 682.261 C 1167.162 688.813 1156.8 694.7 1156.8 694.7 C 1156.8 694.7 1137.9 704.622 1105.604 715.481 C 1073.307 726.341 1027.615 738.137 974.03 741.885 C 920.444 745.633 858.967 741.333 795.1 720 C 725.6 696.8 672.1 679.2 611.438 673.825 C 550.775 668.45 482.95 675.3 384.8 701 C 104.8 743.1 0 683.1 0 683.1 L 0 455.4 L 0 227.7 L 0 0 L 1919.8 0 L 1919.8 0 L 1919.8 351.35"

        }, 
        gallery: {
            scaleX: 1.1,
            translateY: -10,
            path: "M 0 683.1 C 0 683.1 26.2 698.1 87.4 707.837 C 148.6 717.575 244.8 722.05 384.8 701 C 482.95 675.3 550.775 668.45 611.438 673.825 C 672.1 679.2 725.6 696.8 795.1 720 C 853.548 739.523 909.995 744.781 960.223 742.66 C 1019.764 740.146 1070.567 727.262 1105.604 715.481 C 1137.9 704.622 1156.8 694.7 1156.8 694.7 C 1156.8 694.7 1167.162 688.813 1186.691 682.261 C 1206.219 675.709 1234.912 668.494 1271.575 665.837 C 1308.237 663.181 1352.869 665.084 1404.272 676.77 C 1455.675 688.456 1513.85 709.925 1577.6 746.4 C 1814.3 868.2 1919.8 702.7 1919.8 702.7 L 1919.8 351.35 L 1919.8 0 L 1919.8 0 L 0 0 L 0 341.55 L 0 683.1"
        }
    };

    let introLickClass = '';
    if (window.location.href.includes('/menu') || window.location.href.includes('/product')) {
        introLickClass = 'menu';
    } else if (window.location.href.includes('about')) {
        introLickClass = 'about';
    } else if (window.location.href.includes('gallery')) {
        introLickClass = 'gallery';
    } else {

        if(window.location.href.includes('/contact') || window.location.href.includes('/jobs') || window.location.href.includes('/catering') || window.location.href.includes('/community')) {
            return;
        } else if (window.location.href.includes('/checkout')) {

            return;

        } else {

            introLickClass = 'home';

        }
    }

    if (document.getElementById('morph')) {
        var morphing = anime({
            targets: `.intro-lick.${introLickClass} > .morph`,
            scaleY: animations[introLickClass].scaleY ? animations[introLickClass].scaleY : 1,
            translateY: animations[introLickClass].translateY ? animations[introLickClass].translateY : 0,
            scale: animations[introLickClass].scale ? animations[introLickClass].scale : 1,
            scaleX: animations[introLickClass].scaleX ? animations[introLickClass].scaleX : 1,

            d: [
                {value: animations[introLickClass].path},
            ],
            easing: 'easeInOutSine',
            duration: 9000,
            // delay: 100,
            endDelay: 1000,
            direction: 'alternate',
            // loop: true
            complete: () => {
                shapeHeaderMorph(Math.floor(Math.random() * Math.floor(3)));
            }
        });
    }

}

function shapeContactMorph () {

    if (document.getElementById('morph')) {
        var morphing = anime({
            targets: '.intro-lick > .morph-img',
            d: [
                {value: "M 0 683.1 C 0 683.1 26.2 698.1 87.4 707.837 C 148.6 717.575 244.8 722.05 384.8 701 C 482.95 675.3 550.775 668.45 611.438 673.825 C 672.1 679.2 725.6 696.8 795.1 720 C 853.548 739.523 909.995 744.781 960.223 742.66 C 1019.764 740.146 1070.567 727.262 1105.604 715.481 C 1137.9 704.622 1156.8 694.7 1156.8 694.7 C 1156.8 694.7 1167.162 688.813 1186.691 682.261 C 1206.219 675.709 1234.912 668.494 1271.575 665.837 C 1308.237 663.181 1352.869 665.084 1404.272 676.77 C 1455.675 688.456 1513.85 709.925 1577.6 746.4 C 1814.3 868.2 1919.8 702.7 1919.8 702.7 L 1919.8 351.35 L 1919.8 0 L 1919.8 0 L 0 0 L 0 341.55 L 0 683.1"},
                // {value: "M0,0V492.373s45.7,84.7,175.852,77.873,123.1-18.8,313.24-14.132S714.045,673.774,872.9,717.664s319.61-32.528,319.61-32.528,113.362-39.609,215.006-50.8,159.822,27.325,244.236,20.369,101.86-16.192,168.918-64.484,99.561-152.255,99.561-152.255V0Z"},

              
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

const DOM = {};
DOM.intro = document.querySelector('.content--intro');
DOM.shape = DOM.intro.querySelector('svg.shape');
DOM.shape2 = DOM.intro.querySelector('svg.shape-2');
DOM.path = DOM.shape.querySelector('path');
DOM.path2 = DOM.shape2.querySelector('path');
DOM.shape.style.transformOrigin = '50% 0%';
DOM.shape2.style.transformOrigin = '50% 0%';

const playWelcomeAnimation = () => {

    anime({
        targets: DOM.intro,
        duration: 2000,
        easing: 'easeInOutCubic',
        translateY: '-230vh', 
    });
    anime({
        targets: DOM.shape,
        easing: 'easeInOutCubic',
        scaleY: [
            {value: [0,1], duration: 1000},
            {value: 0, duration: 1400, easing: 'easeOutElastic', elasticity: 700}
        ], 
    });
    anime({
        targets: DOM.shape2,
        easing: 'easeInOutCubic',
        scaleY: [
            {value: [0,1], duration: 1000},
            {value: 0, duration: 1200, easing: 'easeOutElastic', elasticity: 700}
        ], 
    });
    anime({
        targets: DOM.path,
        duration: 1000,
        easing: 'easeInOutQuad',
        d: DOM.path.getAttribute('pathdata:id'), 
        complete: () => {
            shapeHeaderMorph(1);
            shapeContactMorph();
            // shapeFillerMorph();
        }
    });

    anime({
        targets: DOM.path2,
        duration: 1000,
        easing: 'easeInOutQuad',
        d: DOM.path.getAttribute('pathdata:id'), 
        complete: () => {
        }
    });

};

function welcome () {

    // const dripFactor = isMobile ? 2.4 : 3.5;

    // anime({ 
    //     targets: DOM.intro,
    //     duration: 5000,
    //     easing: 'easeInOutSine',
    //     translateY: '-200vh', 
    // });

    // anime({
    //     targets: DOM.shape,
    //     scaleY: [
    //         {value: [dripFactor, 0], duration: 5000,easing: 'easeInOutSine'},
    //     ], 
    // });

    // anime({
    //     targets: DOM.path,
    //     duration: 4000,
    //     easing: 'easeOutSine',
    //     d: DOM.path.getAttribute('pathdata:id'),
    //     complete: () => {
    //         document.getElementsByClassName('main-stuff')[0].style.position = 'static';
    //         DOM.intro.style.display = 'none'; 
    //         if (document.getElementsByClassName('sore-thumb')[0])document.getElementsByClassName('sore-thumb')[0].style.display = 'block';
    //         shapeFillerMorph();
    //         shapeHeaderMorph();
    //         shapeContactMorph();
    //         shapeFooterMorph();
    //     }
    // });

    determineGulpColor();

    const tubBtn = document.querySelector('#big-gulp');

    playWelcomeAnimation();

    /*shopping cart slider*/
    const hamburgerIcon = document.getElementsByClassName('nav-btn')[0];
    hamburgerIcon && hamburgerIcon.addEventListener('click', () => {
        shapeNavMenuMorph();
    });

    const cartContainer = document.querySelector('[data-cart="container"]');

    if(cartContainer) new Cart(cartContainer);

    tubBtn.addEventListener('click', () => {

        if (tubBtn.checked) {
            document.querySelector('body').style.height = '100%';
            document.querySelector('body').style.overflow = 'hidden';

        } else {

            document.querySelector('body').style.height = 'auto';

        }

    });

    const continueShoppingBtn = document.querySelector('.btn.btn-default');
    const checkoutBtn = document.querySelector('.button.checkout.wc-forward');
    continueShoppingBtn.addEventListener('click', () => {
        document.querySelector('body').style.height = 'auto';
    });
    checkoutBtn.addEventListener('click', () => {
        document.querySelector('body').style.height = 'auto';
    });

}

function shapeNavMenuMorph () {

  if (document.getElementById('nav-menu-svg')) {

      var morphing = anime({
          targets: '#nav-menu-svg > path',
          scaleY: [
              {value:[0.8,1.2],duration: 3000,easing: 'easeInSine'},
              {value:0.9,duration: 3500,easing: 'easeOutSine'},
              {value:1, duration: 4000,easing: 'easeOutSine'}
          ], 
          easing: 'easeInOutSine',
          duration: 10500,
          // delay: 1000,
      });

  }

}

function determineGulpColor() {

    if(window.location.pathname !== '/') {
        
        document.querySelector('#big-gulp-label').classList.add('dark');

    } else {

        document.querySelector('#big-gulp-label').classList.remove('dark');

    }
}


export default welcome;