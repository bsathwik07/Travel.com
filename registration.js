document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;

    const message = document.getElementById('message');

    // Validate password match
    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match.";
        message.style.visibility = 'visible';
        return;
    }

    // Validate terms acceptance
    if (!terms) {
        message.innerText = "You must accept the terms and conditions.";
        message.style.visibility = 'visible';
        return;
    }

    // Form submission success
    message.innerText = `Registration Successful! Welcome, ${fullName}.`;
    message.style.visibility = 'visible';

    // Optionally, clear the form after submission
    document.getElementById('registrationForm').reset();
});
