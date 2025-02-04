const InnerHeight = window.innerHeight;
const ImgFade = document.getElementsByClassName("ImgFade");
const ImgHeight = ImgFade[0].height;
function FadeInEvent() {
        for (const img of ImgFade){
            console.log(InnerHeight, ImgHeight);
            const ImgBottom = img.y + ImgHeight;
            if (ImgBottom < InnerHeight){
                if (img.classList.contains("inview")) {
                    return
                } else {
                    img.classList.add("inview");
                    console.log(img.alt);
                }
            }
        }
}

export {FadeInEvent};
