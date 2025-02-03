import {HamburgerEvent} from './module/hamburgerEvent.js';
import {ScrollByEvent} from './module/scrollByEvent.js';
import {FadeInEvent} from './module/fadeInEvent.js';

const HamburgerButton = document.getElementById("HamburgerButton");
HamburgerButton.addEventListener("click", HamburgerEvent, false);

addEventListener("click", ScrollByEvent, false);
addEventListener("scroll", FadeInEvent, false);


$(document).ready(function(){
  $('#Slider').slick({
     infinite: true,
     arrows: false,
     centerMode: true,
     centerPadding: "13.3%",
     mobileFirst: true,
     responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerPadding: "6.25%",
      }
    }]
  });
});
