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
        let icon = this.parentElement.nextElementSibling;
        let panel = this.nextElementSibling;
        this.classList.toggle("active");
        icon.classList.toggle("accordion__icon_close");
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.paddingBottom = null;
        } else {
            panel.style.marginTop = "-3px";
            panel.style.paddingBottom = "24px";
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
