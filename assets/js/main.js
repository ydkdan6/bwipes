// script.js

// Wait for the page to finish loading
window.addEventListener('load', function() {
    // Get the preloader element
    var preloader = document.querySelector('.preloader');

    // Set the time interval (in milliseconds) before hiding the preloader
    var delayTime = 5000; // 5000 milliseconds = 5 seconds

    // Hide the preloader after the delay
    setTimeout(function() {
        preloader.classList.add('hide');
    }, delayTime);
});

let actualPrice = 640;
let deliveryPay = 1000;

function onInputCount() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value);
    updateTotalPrice();
}

function increaseCount() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) ;
    updateTotalPrice();
}

function decreaseCount() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value); // Ensure quantity is not negative
    updateTotalPrice();
}

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = actualPrice * quantity;
    document.getElementById('subTotal').textContent = "#" + totalPrice;
    document.getElementById('mainSubTotal').textContent = "#" + totalPrice;

    const checkPay = document.getElementById('free-shipping');

    if (checkPay.checked) {
        const subTotalWithDelivery = totalPrice + deliveryPay;
        document.getElementById('mainTotal').textContent = "#" + subTotalWithDelivery;
    } else {
        document.getElementById('mainTotal').textContent = "#" + totalPrice;
    }
}

function checkPay() {
    const checkPay = document.getElementById('free-shipping');
    if (checkPay.checked) {
        addDelivery();
    } else {
        updateTotalPrice();
    }
}

function addDelivery() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = actualPrice * quantity;
    const subTotalWithDelivery = totalPrice + deliveryPay;
    document.getElementById('mainTotal').textContent = "#" + subTotalWithDelivery;
}
function freeDelivery() {
    const checkPay = document.getElementById('free-shipping');
    if(checkPay.checked) {
        addDelivery()
    }
    else {
        updateTotalPrice();
    }
}

//Product Subscription Notification Auth
function notifyWithSelectedValues() {
    // Get the selected pack size
    var p = document.querySelector('select[name="packsize"]').value;
    // Get the subscription plan
    var plan = document.querySelector('select[name="plan"]').value;
    // Get the entered quantity
    var q = document.querySelector('input[name="qty"]').value;
    
    // Call notifySubscriber() with the selected values
    notifySubscriber(p, plan, q);
}

function notifySubscriber(p, plan, q) {
    Notification.requestPermission().then(function(permission){
        if(permission === "granted") {
            var notification = new Notification('CheriX Subscription Confirmation', {
                body: "You have subscribed to the "+ plan +" " + "With total: " + q + " " + "and price of: " + p,
            });

            notification.onclick = function(event){
                alert("Notificcation Clicked!");
            }
        }
    });
}
