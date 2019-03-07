import { isMobile } from './utils/ScreenSizes';
import tns from './tineee.js';

function aboutPageSliderInit () {

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
            if(dots[i])
                dots[i].className = dots[i].className.replace(" active", "");
        }
        
        if(slides[n]) {
            slides[n].style.right =  '25vw';
            slides[n + 1 < slides.length ? n + 1 : 0].style.right = '-45vw';
            setInterval(() => console.log('hi'), 10);
            if (isMobile) {
                slides[n].style.display = 'none';
                slides[n + 1 < slides.length ? n + 1 : 0].style.display = 'block';
            }
            
        }

        if(dots[n])
            dots[n].className += " active";

    }

    function autoSlide (n) {
        const slideNumber = n > document.getElementsByClassName("mySlides").length ? 0 : n;
        showSlides(slideNumber);
        setTimeout(() => {
            autoSlide(slideNumber + 1)
        }, 2500);
    }
      
    const listOfDots = document.getElementsByClassName('dot');

    listOfDots[0] && listOfDots[0].addEventListener('click', (e) => currentSlide(0));
    listOfDots[1] && listOfDots[1].addEventListener('click', (e) => currentSlide(1));
    listOfDots[2] && listOfDots[2].addEventListener('click', (e) => currentSlide(2));

}

function about () {

    // aboutPageSliderInit();
    if(document.querySelector('.slide-container'))
        var slider = tns({

            container: '.slide-container',
            // slideBy: 'page',
            mouseDrag: true,
            swipeAngle: false,
            autoplay: true,
            speed: 1000, 
            loop: true, 
            // fixedWidth: 190,
            items: 1, 
            center: true,
        
        });


}

export default about;