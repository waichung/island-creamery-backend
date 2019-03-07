import tns from './tineee.js';
import { isMobile, isDesk } from './utils/ScreenSizes';


function resetSlides () {

    // indexChanging = true;

    const place = document.getElementsByClassName('place');

    for (var i=0; i<place.length; i++) {
        place[i].classList.remove('active');
        place[i].classList.remove('next');
        place[i].classList.remove('last');
        place[i].children[0].style = '';
    }

    const currentActiveSlides = document.querySelectorAll('.tns-slide-active');

    currentActiveSlides[0].classList.add('last');
    currentActiveSlides[1].classList.add('active');
    currentActiveSlides[2].classList.add('next');

}

function home() {

    if (isMobile) {
        var slider = tns({

            container: '.places-mobile',
            // slideBy: 'page',
            mouseDrag: true,
            swipeAngle: false,
            // autoplay: true,
            speed: 400, 
            loop: true, 
            fixedWidth: 190,
            // items: 3, 
            center: true,
        
        });

        resetSlides();
        slider.events.on('indexChanged', (info, eventName) => {
            
            setTimeout(() => resetSlides(), 1);
            
         });

    }

    //ANCHOR

    if (isDesk) {
        const clickHereBeforeDrop = document.querySelector('#stop-drip');
        clickHereBeforeDrop && clickHereBeforeDrop.addEventListener('click', (e) => {
            e.preventDefault();
            // setTimeout(() => window.scrollTo(0, document.querySelector('.flavours-content-container').getBoundingClientRect().top), 500);
            window.scrollTo(0, document.querySelector('.flavours-content-container').getBoundingClientRect().top);
        });
    
    }

    const changeFlavour = (flavourId, name) => {

    const shouldOrderSpan = document.getElementsByClassName('should-order')[0];
    shouldOrderSpan.id = flavourId;
    shouldOrderSpan.innerHTML = name;
    const allIceCreamFlavours = document.getElementsByClassName('ice-cream');
    for (var i=0; i<allIceCreamFlavours.length; i++) {
        allIceCreamFlavours[i].classList.remove('active');
        if (allIceCreamFlavours[i].classList.contains(flavourId)) {
            allIceCreamFlavours[i].classList.add('active');
        }
    }

    };

    const flavourCloud = document.getElementsByClassName('flavours-cloud')[0];

    flavourCloud && flavourCloud.addEventListener('click', (e) => {

        if (e && e.target && !e.target.classList.contains('flavours-cloud')) {

            const flavourId = e.target.getAttribute('id');
            const name = e.target.innerHTML;
            changeFlavour(flavourId, name);

        }

    });

    const surpriseLink = document.getElementById('surprise');

    surpriseLink && surpriseLink.addEventListener('click', (e) => {

        e.preventDefault();
        if (e && e.target) {
            
            const random = Math.floor(Math.random() * Math.floor(flavourCloud.children.length));
            const randomFlavourId =  flavourCloud.children[random].getAttribute('id');
            const randomName =  flavourCloud.children[random].innerHTML;
            changeFlavour(randomFlavourId, randomName);
            const captions = surpriseLink.getAttribute('captions');
            const listOfCaptions = captions.split(',');
            surpriseLink.innerHTML = listOfCaptions[Math.floor(Math.random() * Math.floor(listOfCaptions.length))];      

        }
    });
}


export default home;