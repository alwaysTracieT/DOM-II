// Your code goes here
//LOGO SIZE CHANGE
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function(event){
    event.target.style.transform = "scale(1.2)";
});  

//WELCOME POP UP
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

//FONT BOLD ON NAV HOME
const navOptions = document.querySelector('.nav-link');
navOptions.addEventListener('mouseover', function(event){
    event.target.style.fontWeight = "bold";
});





