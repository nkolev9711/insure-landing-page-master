let menuBtn = document.querySelector(".mobile-menu-icon")
let ul = document.querySelector(".nav-ul")

menuBtn.addEventListener('click', () => {
	ul.classList.toggle("toggleClass")
    menuBtn.classList.toggle("change");

})
