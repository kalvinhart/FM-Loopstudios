const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");

function toggleNav() {
    header.classList.toggle("active");
}

burger.addEventListener("click", toggleNav);