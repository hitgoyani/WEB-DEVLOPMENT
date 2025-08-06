document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    nameField.addEventListener('input', function() {
      const name = this.value.trim();
      if (name.length === 0) {
        nameError.textContent = '';
      } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Name can only contain letters and spaces.';
      } else {
        nameError.textContent = '';
      }
    });
    
    emailField.addEventListener('input', function() {
      const email = this.value.trim();
      if (email.length === 0) {
        emailError.textContent = '';
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
      } else {
        emailError.textContent = '';
      }
    });
    
    messageField.addEventListener('input', function() {
      const message = this.value.trim();
      if (message.length === 0) {
        messageError.textContent = '';
      } else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
      } else if (message.length > 500) {
        messageError.textContent = 'Message cannot exceed 500 characters.';
      } else {
        messageError.textContent = '';
      }
    });
    
    form.addEventListener('submit', function(event) {
      let valid = true;
      
      const name = nameField.value.trim();
      if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
        valid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Name can only contain letters and spaces.';
        valid = false;
      } else {
        nameError.textContent = '';
      }
      
      const email = emailField.value.trim();
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
      
      const message = messageField.value.trim();
      if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
        valid = false;
      } else if (message.length > 500) {
        messageError.textContent = 'Message cannot exceed 500 characters.';
        valid = false;
      } else {
        messageError.textContent = '';
      }
      
      if (!valid) {
        event.preventDefault();
        if (nameError.textContent) {
          nameField.focus();
        } else if (emailError.textContent) {
          emailField.focus();
        } else if (messageError.textContent) {
          messageField.focus();
        }
      } else {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
      }
    });
  }
}); 