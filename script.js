document.addEventListener('DOMContentLoaded', () => {

//=========================== 1. DARK MODE TOGGLE ===========================//
const themeBtn = document.getElementById('theme');  

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    //Toggle button text between Dark Mode and LIght Mode
    if (document.body.classList.contains('dark-mode')) {
      themeBtn.textContent = 'Light Mode';  
    } else {
      themeBtn.textContent = 'Dark Mode';  
    }
  });
}

//=========================== 2. FORM VALIDATION ===========================//
const form = document.getElementById('regform');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const genderInput = document.getElementById('gender');
const dobInput = document.getElementById('dob');
const countryInput = document.getElementById('country');
const phoneInput = document.getElementById('phone');
const bioInput = document.getElementById('bio');

if (form) {
  form.addEventListener('submit', function(e) {
      let isValid = true;

      // 1. Full Name Validation
      if (!nameInput || nameInput.value.trim() === '') {
          alert('Please enter your full name.');
          isValid = false;
      } 

      // 2. Email Validation
      if (!emailInput || emailInput.value.includes('@') || !emailInput.value.includes('.')) {
          alert('Please enter a valid email address.');
          isValid = false;
      }

      // 3. Password Validation (At least 6 characters)
        if (!passwordInput || passwordInput.value.length < 6) {
            alert('Password must be at least 6 characters long.');
            isValid = false;
        }   

        // 4. Confirm Password Validation (Must match password)
        if (!confirmPasswordInput || confirmPasswordInput.value !== passwordInput.value) {
            alert('Passwords do not match.');
            isValid = false;
        }

        // 5. Gender Validation (Ensure an option is selected)
        if (genderInput && (genderInput.value === '' || genderInput.value === '-- Select --')) {
            alert('Please select your gender.');
            isValid = false;
        }
        
        // 6. Date of Birth Validation
        if (dobInput && dobInput.value === '') {
            alert('Please enter your date of birth.');
            isValid = false;
        }

        // 7. Country Validation 
        if (countryInput && countryInput.value.trim() === '') {
            alert('Please enter your country.');
            isValid = false;
        }   

        // 8. Phone Number Validation
        if (phoneInput && phoneInput.value.trim().length <10) {
            alert('Please enter a valid phone number.');
            isValid = false;
        }

        // 9. Bio Validation (Ensure it's not empty)
        if (bioInput && bioInput.value.trim() === '') {
            alert('Please tell us a little bit about yourself in the bio section.');
            isValid = false;
        }

        //Stop the form submission if any validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });
}
});
