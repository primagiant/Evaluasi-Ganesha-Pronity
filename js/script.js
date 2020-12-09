// Initialize AOS CDN
AOS.init();

// Preloader dengan Jquery
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

// REMOVE MENU and SCROLL ACTION
$('.nav-link').on('click', function(e){
    let href = $(this).attr('href');
    let elementHref = $(href);
    
    navMenu.classList.remove('show')

    $("html,body").animate({
        scrollTop: elementHref.offset().top
    }, 500, 'easeInOutExpo')

    e.preventDefault()
})

// FILTER SCRIPT UNTUK PROJECT SECTION
$(document).ready(function(){
    $(".project-filter-list").on('click', function(){
        const nilai = $(this).attr('data-filter');
        if(nilai == 'all') {
            $(".project-list").show('1000');
        } else {
            $(".project-list").not("."+ nilai).hide('1000');
            $(".project-list").filter("."+ nilai).show('1000');
        }
    })
})

// CHANGE THEME
const themeChanger = document.querySelector('.change-theme');
const themeColor = document.querySelectorAll('.theme-color');

themeColor.forEach(color => color.addEventListener('click', ()=>{
    let theme = color.getAttribute('data-theme');
    themeChanger.setAttribute('href','css/'+theme+'.css')
}))