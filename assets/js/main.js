// Transition 2
window.onload = () => {
    // Получение элементов нажатия
    const but3 = document.getElementById("away");

    // Получение ссылок
    const anchor3 = document.getElementById("get_hrefInAbout");
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 400);

    but3.addEventListener('click', e => {
        e.preventDefault();
        console.log(anchor3.href)

        transition_el.classList.add('is-active');

        setInterval(() => {
            window.location.href = anchor3.href;
        }, 400);
        console.log(anchor3.href)
    })
}

// Slider engine
$(document).ready(function(){
    $('.my_slider').slick({
      arrow:true,
      dots: false,
      adaptiveHeight:true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 500,
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 700,
      touchThreshold: 30,
      waitForAnimate: false,
      centerMode:true,
      infinite: false,
      initialSlide: 2
    });
    $('.slider_for_pr').slick({
      arrow:true,
      dots: false,
      adaptiveHeight:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      autoplay: true,
      autoplaySpeed: 800,
      touchThreshold: 30,
      waitForAnimate: false,
      centerMode:true,
      infinite: false,
      initialSlide: 2
    });
  });
  
// Popups engine
  document.addEventListener("DOMContentLoaded", () => {
    const popupLinks = document.querySelectorAll('.popup-link');

    if(popupLinks.length>0){
        for(let index = 0; index < popupLinks.length; index++){
            const popupLink = popupLinks[index];
            popupLink.addEventListener("click", function(e){
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup,popupName);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if(popupCloseIcon.length > 0){
        for(let index = 0; index<popupCloseIcon.length; index++){
            const el = popupCloseIcon[index];
            el.addEventListener('click', function(e){
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup,popupName){
        const navHid = document.getElementById('men');
        if(curentPopup){
            curentPopup.classList.add('open');
            if(popupName == 'popup_ph'){
                $('.my_slider').slick('refresh');
                $("html, body").animate({
                    scrollTop: $('#popup_ph').offset().top
                });
            } else if(popupName == 'proga'){
                $('.slider_for_pr').slick('refresh');
                $("html, body").animate({
                    scrollTop: $('#proga').offset().top
                });
            } else if(popupName == 'video'){
                $("html, body").animate({
                    scrollTop: $('#video').offset().top
                });
            }
            window.setTimeout(function() {
                navHid.classList.add('close');
              }, 100);
            $("body").css("overflow", "hidden");
        }
    }

    function popupClose(popupActive){
        const navHid = document.getElementById('men');
        window.setTimeout(function() {
            navHid.classList.remove('close');
            popupActive.classList.remove('open');
          }, 600);
        $("html, body").animate({
            scrollTop: $('#main_pr').offset().top
        });
        $("body").css("overflow", "scroll");
        $("body").css("overflow-x", "hidden");
    }
});

// Video slider engine
function videoUrl(x){
  document.getElementById('slider_video').src = x;
}

// Video func
const playBtn = document.getElementById('vid_play');
const pauseBtn = document.getElementById('vid2');
const videoEl = document.getElementById('slider_video');


playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
    }
}, false);

pauseBtn.addEventListener('click', function () {
    videoEl.pause();
}, false);

