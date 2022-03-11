window.addEventListener('load', () => {

    const mobileMenu = document.querySelector("#mobile-menu")
    const menu = document.querySelector(".menu")
    

    mobileMenu.addEventListener("click", () => {
        menu.classList.toggle("active")
        mobileMenu.classList.toggle("act")
    })

})