document.getElementById('bookingType').addEventListener('change', function() {
    const bookingType = this.value;
    const detailsContainer = document.getElementById('detailsContainer');
    const specificDetailsContainer = document.getElementById('specificDetailsContainer');
    const submitButton = document.getElementById('submitButton');

    if (bookingType) {
        detailsContainer.style.display = 'block';
        specificDetailsContainer.querySelector('label').innerText = getDetailsLabel(bookingType);
        specificDetailsContainer.querySelector('input').placeholder = getDetailsPlaceholder(bookingType);
        specificDetailsContainer.querySelector('input').value = ''; // Clear previous value
        submitButton.disabled = false;
    } else {
        detailsContainer.style.display = 'none';
        submitButton.disabled = true;
    }
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const bookingType = document.getElementById('bookingType').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const specificDetails = document.getElementById('specificDetails').value;

    if (bookingType && name && email && phone && date && specificDetails) {
        const message = document.getElementById('message');
        message.innerText = `Booking Confirmed: ${bookingType.charAt(0).toUpperCase() + bookingType.slice(1)} for ${name} on ${date}.`;
        message.style.visibility = 'visible';
        
        // Optionally, clear the form after submission
        document.getElementById('bookingForm').reset();
        document.getElementById('detailsContainer').style.display = 'none';
        submitButton.disabled = true;
    }
});

// Helper functions to customize the booking details based on type
function getDetailsLabel(type) {
    switch (type) {
        case 'train': return 'Train Number';
        case 'bus': return 'Bus Route';
        case 'hotel': return 'Hotel Name';
        case 'flight': return 'Flight Number';
        case 'car_rental': return 'Car Model';
        default: return 'Booking Details';
    }
}

function getDetailsPlaceholder(type) {
    switch (type) {
        case 'train': return 'Enter Train Number';
        case 'bus': return 'Enter Bus Route';
        case 'hotel': return 'Enter Hotel Name';
        case 'flight': return 'Enter Flight Number';
        case 'car_rental': return 'Enter Car Model';
        default: return 'Enter Details';
    }
}
