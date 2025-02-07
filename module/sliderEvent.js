function SliderEvent() {
  $('#Slider').slick({
     infinite: true,
     arrows: false,
     centerMode: true,
     centerPadding: "13.3%",
     mobileFirst: true,
     responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        centerPadding: "6.25%",
      }
    }]
  });
}

export {SliderEvent};
