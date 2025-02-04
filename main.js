import {HamburgerEvent} from './module/hamburgerEvent.js';
import {ScrollByEvent} from './module/scrollByEvent.js';
import {FadeInEvent} from './module/fadeInEvent.js';
import {SliderEvent} from './module/sliderEvent.js';


const HamburgerButton = document.getElementById("HamburgerButton");
HamburgerButton.addEventListener("click", HamburgerEvent);
addEventListener("click", ScrollByEvent);
addEventListener("scroll", FadeInEvent);
addEventListener("DOMContentLoaded", SliderEvent);
