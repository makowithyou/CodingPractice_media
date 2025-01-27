const HamburgerButton = document.getElementById("HamburgerButton");
const HamburgerMenu = document.getElementById("HamburgerMenu");

HamburgerButton.addEventListener (
    "click",
    (e) => {
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

        // menuの開閉
        HamburgerMenu.classList.toggle("open");
    }
)
