const infoIcon = document.querySelector('.list__svg');
const popup = document.querySelector(".popup");

infoIcon.addEventListener("mouseover", function () {
    popup.style.opacity = 1;
})

infoIcon.addEventListener("mouseout", function () {
    popup.style.opacity = 0;
})