$(".midas__slider").slick({
  slideToShow: 1,
  //   dots: true,
  //   arrows: false,
  prevArrow:
    '<button class="slider__arrows-left"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slider__arrows-right"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".company__slider").slick({
  slideToShow: 1,
  dots: false,
  //   arrows: false,
  prevArrow:
    '<button class="slider__arrows-left-company"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slider__arrows-right-company"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".company__slider-mobile").slick({
  slideToShow: 1,
  //   dots: true,
  arrows: false,
  //   prevArrow:
  //     '<button class="slider__arrows-left-company"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
  //   nextArrow:
  //     '<button class="slider__arrows-right-company"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".case__slide").slick({
  slideToShow: 1,
  dots: false,
  arrows: true,
  prevArrow:
    '<button class="slider__arrows-left-case"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="slider__arrows-right-case"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  // autoplay: true,
  // autoplaySpeed: 2000,
});
