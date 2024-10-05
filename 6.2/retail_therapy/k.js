  function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
  
    var valid = true;
  
    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
  
    // Validate username
    if (username.length < 3) {
      usernameError.textContent = 'Username must be at least 3 characters long';
      valid = false;
    }
  
    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      valid = false;
    }
  
    // Validate password
    if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long';
      valid = false;
    }
  
    // Validate confirm password
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
      valid = false;
    }
  
    return valid;
  }
  
  function validateSignInForm() {
    var username = document.getElementById('signin_username').value;
    var password = document.getElementById('signin_password').value;
    var signinError = document.getElementById('signinError');
  
    var valid = true;
  
    // Clear previous error messages
    signinError.textContent = '';
  
    // Validate username
    if (username === '' || password === '') {
      signinError.textContent = 'Both fields are required';
      valid = false;
    }
  
    return valid;
  }
  
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });