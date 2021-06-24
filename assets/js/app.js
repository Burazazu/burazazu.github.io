$(document).ready(function () {
   $('.games__slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: false,
      centerMode: false,
      variableWidth: false,
      responsive: [
         {
            breakpoint: 1340,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 1040,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });


   $('.intro__slider').slick({
      vertical: false,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'ease',
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: false,
      centerMode: false,
      variableWidth: false,

      responsive: [
         {
            breakpoint:550,
            settings: {
               dots:false
            }
         }
      ]

      
   });
   
});