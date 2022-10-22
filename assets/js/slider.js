$(document).ready(function(){
    $('.container-slider2').slick({
        infinity: true,
        arrows: true, // hien thi mui ten
        fade: true,  // phai mau
        draggable: false, // co the keo duoc

        prevArrow:`<button type='button' class='slick-prev pull-left'>
        <i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'>
        <i class='fa fa-angle-right' aria-hidden='true'></i></button>`
    });
  });



$(document).ready(function(){
    $('.background-header').slick({
      autoplay: true, /* this is the new line */
      infinite: true,
      autoplaySpeed: 5000,
      speed: 0,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    });

  });



$(document).ready(function(){
    $('.slider-container6').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: true,
        arrows: false, // hien thi mui ten
        dots: true,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: false,

    });
  });