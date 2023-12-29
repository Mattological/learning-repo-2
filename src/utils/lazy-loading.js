const lazyLoading=()=>{
    const lazyImages=document.querySelectorAll('.lazy');
const observer= new IntersectionObserver((entries,observer)=>{//in our case the parameter 'entries' is an array
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                let img=entry.target;//entry.target is the src attribute of each image
                img.src=img.dataset.src
                img.classList.remove('loading');//takes a string argument, we wanna remove the loading class when the image comes on the viewport
                img.classList.add('loaded')//takes astring argument, here we replace the loading class with loaded
                observer.unobserve(img)//the observer references the intersection observer itself giving us access to unobserve method
                //unobserve method stops observing the target, in effect stops all future observation after the first time
            }
        })
   
    })//this is an API in js we can use to know when an image enters the viewport after scrolling 
    //takes two arguments- a callback function, and an object {}, for setting up options 
    //there are three options available wit some defaults- root(default is null), rootMargin(default is 0px) and threshold(default is 0)
    //since we have left the options on default we can remove this argument if we want but i dont want
    lazyImages.forEach((image)=>{
    observer.observe(image)//a method from our IntersectionObserver class of which observer is an instance 
    });
}

export default lazyLoading;