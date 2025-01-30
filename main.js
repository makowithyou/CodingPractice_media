import {HamburgerEvent} from './module/hamburgerEvent.js';
import {ScrollByEvent} from './module/scrollByEvent.js';
import {FadeInEvent} from './module/fadeInEvent.js';

const HamburgerButton = document.getElementById("HamburgerButton");
HamburgerButton.addEventListener("click", HamburgerEvent, false);

addEventListener("click", ScrollByEvent, false);
addEventListener("scroll", FadeInEvent, false);
