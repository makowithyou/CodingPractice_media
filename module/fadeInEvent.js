const InnerHeight = window.innerHeight;
const ImgFade = document.getElementsByClassName("ImgFade");
const ImgHeight = ImgFade[0].height;
function FadeInEvent() {
    // window.addEventListener("scroll", ()=>{
        for (const img of ImgFade){
            const ImgBottom = img.y + ImgHeight;
            if (ImgBottom < InnerHeight){
                if (!img.classList.contains("inview")) {
                    img.classList.add("inview");
                }
            }
        }
    // });
}

export {FadeInEvent};
