// Sample reviews data
const reviews = [
    {
        name: "Emily R.",
        photo: "https://www.example.com/user1.jpg",
        comment: "Absolutely love this vlog! Inspiring content and incredibly useful tips!",
        rating: 5
    },
    {
        name: "Daniel S.",
        photo: "https://www.example.com/user2.jpg",
        comment: "Amazing destinations and beautiful cinematography. A must-watch!",
        rating: 5
    },
    {
        name: "Priya K.",
        photo: "https://www.example.com/user3.jpg",
        comment: "I planned my trip to Thailand thanks to this vlog. Fantastic tips!",
        rating: 5
    },
    {
        name: "John M.",
        photo: "https://www.example.com/user4.jpg",
        comment: "Every episode makes me want to pack my bags and go!",
        rating: 4
    }
];

// Function to display reviews
function displayReviews() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    reviews.forEach((review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `
            <img src="${review.photo}" alt="${review.name} Photo" class="user-photo">
            <div>
                <h3>${review.name}</h3>
                <p>${review.comment}</p>
                <span class="rating">${'⭐'.repeat(review.rating)}</span>
            </div>
        `;
        reviewList.appendChild(reviewDiv);
    });
}

// Event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const rating = parseInt(document.getElementById('rating').value);

    // Add new review to reviews array
    reviews.push({ name, photo: 'https://www.example.com/default-user.jpg', comment, rating });

    // Clear form fields
    this.reset();

    // Update displayed reviews
    displayReviews();
});

// Initialize page with existing reviews
displayReviews();
