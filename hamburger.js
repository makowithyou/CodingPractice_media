const HamburgerButton = document.getElementById("HamburgerButton");

HamburgerButton.addEventListener (
    "click",
    (e) => {
        const spans = e.currentTarget.children;
        for (let span of spans) {
            if (span.classList.length == 0) {
                span.classList.toggle("open");
            } else if (span.classList.length == 1) {
                span.classList.toggle("open");
                span.classList.toggle("close");
            }
        }
    }
)
