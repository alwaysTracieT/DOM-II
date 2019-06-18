// Your code goes here
//1. LOGO SIZE CHANGE
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function(event){
    event.target.style.transform = "scale(1.2)";
});  

//2. WELCOME POP UP
const openPop = document.querySelector('.open-popup');
const closePop = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');
const hidePopupListener = {
    handleEvent: function(){
        popup.setAttribute('hidden', '');
    }
};
openPop.addEventListener('click', function(){
    popup.removeAttribute('hidden');
});
closePop.addEventListener('click', hidePopupListener);

//3. FONT BOLD ON NAV HOME
const navOptions = document.querySelector('.nav-link');
navOptions.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = "bold";
});

//4-5. DRAG THE BUS AND MAKE IT BIG, MOUSE OUT TO SHRINK IT AGAIN
const funBus = document.querySelector(".intro > img");
funBus.addEventListener('drag', function(event){
    event.target.style.transform = "scale(2)";
});
funBus.addEventListener('mouseout', function(event){
    event.target.style.transform = "scale(1)";
});


//6. CONSOLE LOG WHEN DESTINATION DIV IS CLICKED ON
const buttonOne = document.querySelector(".btn");
const buttonDiv = document.querySelector(".destination")
buttonDiv.addEventListener('click', function(event){
    console.log(`The div was clicked at: ${event}`);
});

//7. KEEP NAV LINKS FROM RELOADING
navOptions.addEventListener('click', function(event){
    event.preventDefault();
    console.log('The nav link was clicked');
});

//8. MAKE THE HEADER DISAPPEAR
const body = document.querySelector('body');
const header = document.querySelector('header');
body.addEventListener("keydown", function(){
    header.style.opacity = "0";
});

//9. BRING THE HEADER BACK
const navItems = document.querySelector('.nav-container');
navItems.addEventListener("mouseenter", function(){
    header.style.opacity = "1";
})

//10. PLAY WITH THE WHEEL FUNCTION
body.addEventListener('wheel', function scrolling(){
    alert("Keep Scrolling");
    body.removeEventListener('wheel', scrolling);
});

//10. ANIMATE?
