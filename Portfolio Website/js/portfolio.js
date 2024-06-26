//these functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//this function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var slides = document.getElementsByClassName("mySlides");
    //takes all elements with the class name "dot" and stores them in the variable array "dots"
    var dots = document.getElementsByClassName("dot");
    //if n > length of array "slides", the slideIndex is set to 1
    if (n > slides.length) { slideIndex = 1 };
    if (n  < 1) {slideIndex = slides.length}
    //if n < 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        //this for loop takes each item in the array "slides" and sets the display to none
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        //this for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    //this displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    //this adds the active styling to the dot associated with the image
    dots[slideIndex - 1].className += " active";
}

//this code will close the contact form when the user clicks off of it
//the first step is to add an event listener for any clicks on the website
document.addEventListener("click", function (event) {
    //if click happens on the cancel button or anywhere that is not the contact form
    //AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") &&
        !event.target.closest(".pop_up_button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)