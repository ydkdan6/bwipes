// script.js

// Wait for the page to finish loading
window.addEventListener('load', function() {
    // Get the preloader element
    var preloader = document.querySelector('.preloader');

    // Set the time interval (in milliseconds) before hiding the preloader
    var delayTime = 5000; // 2000 milliseconds = 2 seconds

    // Hide the preloader after the delay
    setTimeout(function() {
        preloader.classList.add('hide');
    }, delayTime);
});
