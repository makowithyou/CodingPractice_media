function HamburgerEvent(e){
    // ボタンの挙動
    const spans = e.currentTarget.children;
    for (let span of spans) {
        if (span.classList.length == 0) {
            span.classList.toggle("open");
        } else if (span.classList.length == 1) {
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
