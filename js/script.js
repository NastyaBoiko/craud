const infoIcon = document.querySelector('.list__svg');
const popup = document.querySelector(".popup");

infoIcon.addEventListener("mouseover", function () {
    popup.style.opacity = 1;
})

infoIcon.addEventListener("mouseout", function () {
    popup.style.opacity = 0;
})


const accordionBtns = document.querySelectorAll('.accordion__btn');

for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener("click", function() {
        accordionBtns[i].classList.toggle("active");
        let panel = this.nextElementSibling;
        console.log(panel);
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.paddingBottom = null;
        } else {
            panel.style.paddingBottom = "20px";
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
