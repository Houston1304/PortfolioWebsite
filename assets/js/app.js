$(document).ready(function(){
    $('.my_slider').slick({
      arrow:true,
      dots: false,
      adaptiveHeight:true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 500,
      easing: 'ease',
      autoplay: false,
      autoplaySpeed: 1500,
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
      autoplay: false,
      autoplaySpeed: 1500,
      touchThreshold: 30,
      waitForAnimate: false,
      centerMode:true,
      infinite: false,
      initialSlide: 2
    });
  });