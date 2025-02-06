const InnerHeight = window.innerHeight;
const ImgFade = document.getElementsByClassName("ImgFade");
function FadeInEvent() {
        for (const img of ImgFade){
            const ImgBottom = img.y + img.height;
            console.log(img.alt, "img.y:", img.y, "img.height:", img.height);
            // console.log(img.alt, "(", ImgBottom, "<", InnerHeight, ")", img.classList.contains("inview"));
            if (ImgBottom < InnerHeight){
                if (!(img.classList.contains("inview"))) {
                    img.classList.add("inview");
                }
            }
        }
}

export {FadeInEvent};
