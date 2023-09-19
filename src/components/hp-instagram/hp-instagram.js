$(".hp-instagram-slider").slick({
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 2000,
  autoplay: true,
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"> <img src="images/ico/left.svg" loading="lazy" alt="" /></button>',
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"> <img src="images/ico/right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
