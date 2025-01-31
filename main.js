import {HamburgerEvent} from './module/hamburgerEvent.js';
import {ScrollByEvent} from './module/scrollByEvent.js';
import {FadeInEvent} from './module/fadeInEvent.js';

const HamburgerButton = document.getElementById("HamburgerButton");
HamburgerButton.addEventListener("click", HamburgerEvent, false);

addEventListener("click", ScrollByEvent, false);
addEventListener("scroll", FadeInEvent, false);


const Slider = document.getElementById("Slider");
for (let i = 1; i <= 9; i++) {
    const Img = document.createElement("img");
    const BaseSrcText = `https://github.com/makowithyou/CodingPractice_media/blob/main/imges/feature${i}.jpg?raw=true`;
    const BaseAltText = `特集${i}の画像`;

    Img.setAttribute("src", BaseSrcText);
    Img.setAttribute("alt", BaseAltText);
    Slider.appendChild(Img);
}
