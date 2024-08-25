
const theme = document.querySelector("#theme");
const modal = document.querySelector(".customise-theme");
const font = document.querySelectorAll(".chose-size span");
const palette = document.querySelectorAll(".chose-color span");
var root = document.querySelector(":root");

const openmodal = () =>{
  
    modal.style.display = "grid";
    
}
const closemodal = (e) =>{
    if(e.target.classList.contains("customise-theme")){
        modal.style.display = "none";
    }
}



theme.addEventListener("click",openmodal);
modal.addEventListener("click",closemodal);



    

const removeSizeSelector = () =>{
    font.forEach(size => {
        size.classList.remove("active");
    })
}
font.forEach(size =>{
    size.addEventListener("click",()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if(size.classList.contains("font-size-1")){
            fontSize = '12px';
            
        }
        else if(size.classList.contains("font-size-2")){
            fontSize = '20px';
        }
        else if(size.classList.contains("font-size-3")){
            fontSize = '25px';
        }
        else if(size.classList.contains("font-size-4")){
            fontSize = '30px';
        }
    
        document.querySelector("html").style.fontSize = fontSize;
    }) 
})

const changecolor = () =>{
    palette.forEach(color => {
        color.classList.remove("active");
    })
}
palette.forEach(color =>{
    color.addEventListener("click",()=>{
        changecolor();
        let primaryHue;
        color.classList.toggle("active");
        if(color.classList.contains("color-1")){
            primaryHue  = 256;
        }
        else if(color.classList.contains("color-2")){
            primaryHue  = 52;
        }
        else if(color.classList.contains("color-3")){
            primaryHue  = 352;
        }
        else if(color.classList.contains("color-4")){
            primaryHue  = 202;
        }
        color.classList.add("active");
        root.style.setProperty("--primary-color-hue",primaryHue);
    }) 
})






$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed1 = new Typed(".typing", {
        strings: ["Web developer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Web developer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
ScrollReveal({ 
    // reset: true,
    distance: '100px',
    duration: 5000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .title', { origin: 'top' });
ScrollReveal().reveal('.apic,.card,.animate-content,.container2, .row, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
