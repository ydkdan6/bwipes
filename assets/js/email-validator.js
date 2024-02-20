function emailValidator() {
  // Add your email validation logic here
  // For example:
  var email = document.getElementById("email_1").value;
  if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false; // Prevent form submission if email is invalid
  }
  // If email is valid, redirect to dashboard.html
  window.location.href = "dashboard.html";
  return true; // Proceed with form submission
}

function isValidEmail(email) {
  // Add your email validation logic here
  // For example, a basic validation:
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


var agreeBox = document.