addEventListener(
    "click",
    (e) => {
        // console.log(e.target);
        const classList = e.target.classList;
        if (classList[0] == "scrollTo"){
            const targetId = classList[1];
            const targetElement = document.getElementById(targetId);
            const x = targetElement.getBoundingClientRect().x
            const y = targetElement.getBoundingClientRect().y
            window.scrollTo({
                top: y,
                left: x,
                behavior: "smooth",
            });

            HamburgerEvent;
        }
    }
);
