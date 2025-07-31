document.addEventListener('DOMContentLoaded', function () {
  const passwordField = document.getElementById('password');
  const passwordStrength = document.getElementById('strengthMeter');

  if (passwordField && passwordStrength) {
    passwordField.addEventListener('input', function () {
      const value = passwordField.value;
      let score = 0;

      if (value.length >= 6) score++;
      if (/[A-Z]/.test(value)) score++;
      if (/[0-9]/.test(value)) score++;

      let feedback = '';
      switch (score) {
        case 0:
        case 1:
          feedback = '<span style="color:red">Weak</span>';
          break;
        case 2:
          feedback = '<span style="color:orange">Medium</span>';
          break;
        case 3:
          feedback = '<span style="color:green">Strong</span>';
          break;
      }

      if (!value) feedback = '';
      passwordStrength.innerHTML = feedback;
    });
  }

  const form = document.getElementById('registrationForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      let valid = true;

      const name = document.getElementById('name').value.trim();
      const age = parseInt(document.getElementById('age').value, 10);
      const mobile = document.getElementById('mobile').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
        valid = false;
      } else {
        document.getElementById('nameError').textContent = '';
      }

      if (isNaN(age) || age < 12 || age > 100) {
        document.getElementById('ageError').textContent = 'Enter a valid age (12-100).';
        valid = false;
      } else {
        document.getElementById('ageError').textContent = '';
      }

      if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Enter a valid 10-digit mobile number.';
        valid = false;
      } else {
        document.getElementById('mobileError').textContent = '';
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        valid = false;
      } else {
        document.getElementById('emailError').textContent = '';
      }

      let passMsg = '';
      if (password.length < 6) {
        passMsg = 'Password must be at least 6 characters.';
      } else if (!/[A-Z]/.test(password)) {
        passMsg = 'Password must contain an uppercase letter.';
      } else if (!/[0-9]/.test(password)) {
        passMsg = 'Password must contain a number.';
      }

      if (passMsg) {
        document.getElementById('passwordError').textContent = passMsg;
        valid = false;
      } else {
        document.getElementById('passwordError').textContent = '';
      }

      if (!valid) event.preventDefault();
    });
  }
});
