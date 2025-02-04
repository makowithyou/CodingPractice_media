const InnerHeight = window.innerHeight;
const ImgFade = document.getElementsByClassName("ImgFade");
const ImgHeight = ImgFade[0].height;
console.log(ImgFade);
console.log(InnerHeight, ImgHeight);
function FadeInEvent() {
    console.log("FadeInEventの発火");
    // window.addEventListener("scroll", ()=>{
        for (const img of ImgFade){
            const ImgBottom = img.y + ImgHeight;
            if (ImgBottom < InnerHeight){
                if (!img.classList.contains("inview")) {
                    img.classList.add("inview");
                    console.log(img);
                }
            }
        }
    // });
}

export {FadeInEvent};
