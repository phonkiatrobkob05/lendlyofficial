// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const passwordIcon = document.getElementById("togglePassword").querySelector("img");
  
    // Toggle the input type between password and text
    if (passwordField.type === "password") {
      passwordField.type = "text"; // Show password
      passwordIcon.src = "../images/closeeye.svg"; // Change icon to eye-slash
    } else {
      passwordField.type = "password"; // Hide password
      passwordIcon.src = "../images/eye.svg"; // Change icon to eye
    }
  }
  