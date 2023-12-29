const mobileMenu=()=>{
// we are going to select mobile nav by its class name and style it 
const headerBtn=document.querySelector('.header__bars');
const mobileMenu=document.querySelector('.mobile-nav');
const menu_links=document.querySelectorAll('.mobile-nav__link')//querySelector would only select an individual element while,qeurySelectorAll selects all elements with that class
// State
let isMobileMenuOpen=false;//set to false initially since when you open the website the menu isnt open by default
console.log(isMobileMenuOpen)
/*we add the header bars and mobile nav cos when the header bars is 
clicked we want the display of mobile-nav to go from none to flex 
we need to store it in a variable, otherwise we would need to use it immediately
 we want to add something when something is clicked, called an event, specifically a click event*/
headerBtn.addEventListener('click',()=>{
    isMobileMenuOpen=!isMobileMenuOpen; /*this code will keep switching the 
    value on every click/ in other words it will invert the 
    truthyness or falsiness everytime there's a click*/
    if(isMobileMenuOpen){
          //checks the truthyness or falsiness of a value
        mobileMenu.style.display='flex';
        document.body.style.overflowY= 'hidden';
        // this code is supposed to prevent scrolling 
        // document being the entire html
    }else{
        mobileMenu.style.display='none';
        document.body.style.overflowY= 'auto';
    }

   
})
menu_links.forEach(link=>{
// link represents each individual anchor element inside the list element
link.addEventListener('click',()=>{
    isMobileMenuOpen=false;/*if we are clicking on any of our menu buttons, this means we opened the mobile menu and thus isMobileMenuOpen must be true at this point and so we are switching back to false upon clicking*/
    mobileMenu.style.display='none';
    document.body.style.overflowY='auto'; //this restores our scroll bar
})
})

}
export default mobileMenu;
// this line allows us to import our function in main.js