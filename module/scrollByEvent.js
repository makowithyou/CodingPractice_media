import {HamburgerEvent} from './hamburgerEvent.js';

function ScrollByEvent(e) {
    console.log("クリックされました");
    console.log(e.target);
    const classList = e.target.classList;
    if (classList[0] == "scrollTo"){
        const targetId = classList[1];
        const targetElement = document.getElementById(targetId);
        const y = targetElement.getBoundingClientRect().y
        window.scrollBy({
            top: y,
            left: 0,
            behavior: "smooth",
        });

        HamburgerEvent();
    }
}

export {ScrollByEvent};
