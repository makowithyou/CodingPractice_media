const InnerHeight = window.innerHeight;
const ImgFade = document.getElementsByClassName("ImgFade");
const ImgHeight = ImgFade[0].height;
console.log(ImgFade[0].alt, ImgFade[0].classList, ImgFade[0].src);
console.log(InnerHeight, ImgHeight);
function FadeInEvent() {
    console.log("FadeInEventの発火");
    // window.addEventListener("scroll", ()=>{
        for (const img of ImgFade){
            const ImgBottom = img.y + ImgHeight;
            if (ImgBottom < InnerHeight){
                if (!(img.classList.contains("inview"))) {
                    console.log(!(img.classList.contains("inview")));
                    img.classList.add("inview");
                }
            }
        }
    // });
}

export {FadeInEvent};
