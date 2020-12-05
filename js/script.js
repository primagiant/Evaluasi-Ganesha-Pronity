// Preloader
$(window).on("load",function(){
    $('.preloader-container').fadeOut();
})
// MENU SHOW HIDEN
const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close")

// SHOW
toggleMenu.addEventListener('click', function(){
    navMenu.classList.toggle('show');
})

// HIDE
closeMenu.addEventListener('click', function(){
    navMenu.classList.toggle('show');
})

// REMOVE MENU
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))