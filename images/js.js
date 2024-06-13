var typed = new Typed(".text",{
    strings:["WEB-DEVELOPER"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

let right = document.getElementsByClassName("right")[0];
let toogle = document.getElementsByClassName("toogle")[0];
let close = document.getElementsByClassName("close")[0];
if (toogle) {
    toogle.addEventListener("click", () => {
        right.classList.add("show-right-un");
    });
}
if(close){
    close.addEventListener("click",()=>{
        right.classList.remove("show-right-un");
    })
}
const list = document.querySelectorAll("right-list");

function action(){
    let nav = document.getElementsByClassName("right")[0];
    nav.classList.remove("show-right-un"); 
}
list.forEach(n => n.addEventListener("click",action));

function color(){
    let nav = document.getElementsByClassName("nav")[0];
    if(this.ScrollY>=80) nav.classList.add("scroll-nav"); else nav.classList.remove("scroll-nav")
}
window.addEventListener("scroll",color);

const theme = document.querySelector("#theme");
const modal = document.querySelector(".customise-theme");
const font = document.querySelectorAll(".chose-size span");
const palette = document.querySelectorAll(".chose-color span");
var root = document.querySelector(":root");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
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
            fontSize = '14px';
        }
        else if(size.classList.contains("font-size-3")){
            fontSize = '16px';
        }
        else if(size.classList.contains("font-size-4")){
            fontSize = '18px';
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



let light;
let white;
let dark;

const changebg = ()=>{
    root.style.setProperty("--light-color-lightness--",light);
    root.style.setProperty("--white-color-lightness--",white);
    root.style.setProperty("--dark-color-lightness--",dark);
}
bg1.addEventListener("click",()=>{
   
    bg1.classList.add("active");
bg2.classList.remove("active");
bg3.classList.remove("active");

window.location.reload();
})
bg2.addEventListener("click",()=>{
    dark = "95%";
    white = "20%";
    light = "15%";

    bg2.classList.add("active");
bg1.classList.remove("active");
bg3.classList.remove("active");

changebg();
})



bg3.addEventListener("click",()=>{
    dark = "95%";
    white = "10%";
    light = "0%";

    bg3.classList.add("active");
bg1.classList.remove("active");
bg2.classList.remove("active");

changebg();
})

const section = document.querySelectorAll('section[id]');
window.addEventListener("scroll",highlight);

function highlight(){
    let scrolly = window.pageYOffset;

    section.forEach(current =>{
        const sectionheight = current.offsetHeight +9000000;
        const sectiontop = current.offsetTop -5000 ;
         const sectionId = current.getAttribute("id");

        if(scrolly>=sectiontop && scrolly<= sectionheight+ sectiontop){
            document.querySelector(".right a[href*="+ sectionId + ']').classList.add("right-list");
        }
        else{
            document.querySelector(".right  a[href*="+ sectionId + ']').classList.remove("right-list");
        }
    })
}