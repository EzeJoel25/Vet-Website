// Hamburger menu function 
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}


function validateForm() {
    var fName = document.getElementById('fName').value.trim();
    var lName = document.getElementById('lName').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var petName = document.getElementById('petName').value.trim();
    var appointmentDate = document.getElementById('appointmentDate').value.trim();
    var appointmentTime = document.getElementById('appointmentTime').value.trim();

    if (!fName || !lName || !email || !phone || !petName || !appointmentDate || !appointmentTime) {
        alert('Please fill in all required fields.');
        return false;
    }

    return true;
  }   

  document.getElementById('myForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent the form from submitting
    }
});
