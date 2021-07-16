//DOM => using querySelector to select the ing tag form HTML and put it in a variable.
var myImg = document.querySelector("img");

// add an event to the body using addEventListener built in function.
// The event is mousemove 
document.body.addEventListener("mousemove" , function (e)
{
    myImg.style.left = e.clientX;
    myImg.style.top = e.clientY;
})