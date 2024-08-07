const menuBars=document.getElementById("menu-bars");
const overlay=document.getElementById("overlay");   
const nav1=document.getElementById("nav-1");
const nav2=document.getElementById("nav-2");
const nav3=document.getElementById("nav-3");
const nav4=document.getElementById("nav-4");
const nav5=document.getElementById("nav-5");
const navItems=[nav1,nav2,nav3,nav4,nav5];
function navAnimation(num1,num2){
    navItems.forEach((nav,i)=> {
        nav.classList.replace(`slide-${num1}-${i+1}`,`slide-${num2}-${i+1}`);
        console.log(nav.classList.replace(`slide-${num1}-${i+1}`,`slide-${num2}-${i+1}`));
    });
}
function toggleNav(){
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
        navAnimation('out','in');
    }  
    else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        navAnimation('in','out');
    }
}
menuBars.addEventListener('click',toggleNav);
navItems.forEach((nav)=>{
    nav.addEventListener('click',toggleNav);
})
