document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('DOMContentLoaded', function() {
  const passwordField = document.getElementById('password');
  const passwordStrength = document.getElementById('strengthMeter');
  if (passwordField && passwordStrength) {
    passwordField.addEventListener('input', function() {
      const passwordValue = passwordField.value;
      let score = 0;
      if (passwordValue.length >= 6) score++;
      if (/[A-Z]/.test(passwordValue)) score++;
      if (/[0-9]/.test(passwordValue)) score++;
      if (/[^A-Za-z0-9]/.test(passwordValue)) score++;
      let feedback = '';
      if (!passwordValue) feedback = '';
      else if (score <= 1) feedback = '<span style="color:red">Weak</span>';
      else if (score === 2) feedback = '<span style="color:orange">Medium</span>';
      else if (score >= 3) feedback = '<span style="color:green">Strong</span>';
      passwordStrength.innerHTML = feedback;
    });
  }

  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function(event) {
      let isFormValid = true;
      const userName = document.getElementById('name').value.trim();
      if (userName.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
        isFormValid = false;
      } else {
        document.getElementById('nameError').textContent = '';
      }
      const userAge = document.getElementById('age').value;
      if (!userAge || userAge < 12 || userAge > 100) {
        document.getElementById('ageError').textContent = 'Enter a valid age (12-100).';
        isFormValid = false;
      } else {
        document.getElementById('ageError').textContent = '';
      }
      const userMobile = document.getElementById('mobile').value.trim();
      if (!/^[0-9]{10}$/.test(userMobile)) {
        document.getElementById('mobileError').textContent = 'Enter a valid 10-digit mobile number.';
        isFormValid = false;
      } else {
        document.getElementById('mobileError').textContent = '';
      }
      const userEmail = document.getElementById('email').value.trim();
      if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isFormValid = false;
      } else {
        document.getElementById('emailError').textContent = '';
      }
      const userPassword = document.getElementById('password').value;
      let passwordMessage = '';
      if (userPassword.length < 6) passwordMessage = 'Password must be at least 6 characters.';
      else if (!/[A-Z]/.test(userPassword)) passwordMessage = 'Password must contain an uppercase letter.';
      else if (!/[0-9]/.test(userPassword)) passwordMessage = 'Password must contain a number.';
      if (passwordMessage) {
        document.getElementById('passwordError').textContent = passwordMessage;
        isFormValid = false;
      } else {
        document.getElementById('passwordError').textContent = '';
      }
      if (!isFormValid) event.preventDefault();
    });
  }
  });
}
);
