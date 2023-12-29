const darkMode=()=>{
    const themeToggleBtns=document.querySelectorAll("#Theme-toggle");
    //state
    const theme= localStorage.getItem('theme')//yet another method- takes a string argument- 
    //a key from the key value pair, in this case, from our locale storage and returns the value of that key
    
    
    //on mount
    // the line below isnt inside a conditional statement hence it will run the moment the page is loaded/ reloaded (On mount)    
    theme && document.body.classList.add(theme)//this is a shortcut conditional operator style called short-circuiting
    //due to the and operator, it will first check if theme is truthy and only then will it run the second part adding the class
    // the class is light-mode but remember theme variable is a holder for our get method which returns the light-mode class as the value to our inserted key
   
   //handlers
   const handleThemeToggle=()=>{
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme','light-mode')
        // the .contains will check if classList (some type of object) contains the lightmode
    }
        //local storage is an object with a method called setItem
 //setItem method creates a key value pair in local storage. takes two arguments, both strings, first being key, second being value
 //we will be using the localstorage to save the last used theme

    else{
        localStorage.removeItem('theme');
        //reverses actions of setItem, that is deletes the key-value pair
        // we only need to state the key in this case
        document.body.removeAttribute('class');
    }
    // explanation: when we click on one of sun buttons, this line of code above will add a class to the body element of light mode
    // the toggle method switches between hide and show i.e on and off essentially- so if the class isnt on body, it adds it, and if it is, it deletes it
 }
  //Events
  themeToggleBtns.forEach(toggler=>{toggler.addEventListener('click',handleThemeToggle)
  // we refactored our code here making it much more readable
  //'Readable code is most likely the most important skill a developer can acquire, perhaps more important than performance'
})
}
//make my code easy to read

export default darkMode;