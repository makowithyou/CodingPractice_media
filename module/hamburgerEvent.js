function HamburgerEvent(){
    // ボタンの挙動
    const HamburgerSpans = document.getElementsByClassName("HamburgerSpans");
    for (let span of HamburgerSpans) {
        if (span.classList.contains("open") | span.classList.contains("close") ) {
            span.classList.toggle("open");
            span.classList.toggle("close");
        } else {
            span.classList.toggle("open");
        }
    }
    HamburgerButton.classList.toggle("open");

    // menuの開閉
    const HamburgerMenu = document.getElementById("HamburgerMenu");
    HamburgerMenu.classList.toggle("open");
}

export {HamburgerEvent};
