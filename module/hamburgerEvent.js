function HamburgerEvent(){
    // ボタンの挙動
    const HamburgerSpans = document.getElementsByClassName("HamburgerSpans");
    for (let span of HamburgerSpans) {
        if (span.classList.length == 1) {
            span.classList.toggle("open");
        } else if (span.classList.length == 2) {
            span.classList.toggle("open");
            span.classList.toggle("close");
        }
    }
    HamburgerButton.classList.toggle("open");

    // menuの開閉
    const HamburgerMenu = document.getElementById("HamburgerMenu");
    HamburgerMenu.classList.toggle("open");
}

export {HamburgerEvent};
