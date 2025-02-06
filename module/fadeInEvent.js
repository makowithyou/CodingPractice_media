const InnerHeight = window.innerHeight;
const ImgFade = document.getElementsByClassName("ImgFade");
function FadeInEvent() {
        for (const img of ImgFade){
            const ImgBottom = img.getBoundingClientRect().bottom;
            if (ImgBottom < InnerHeight){
                if (!(img.classList.contains("inview"))) {
                    img.classList.add("inview");
                }
            }
        }
}

export {FadeInEvent};
