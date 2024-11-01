document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("inquiryModal");
    const closeModal = document.querySelector(".close");
    const inquireButtons = document.querySelectorAll(".inquire-btn");
    const packageNameSpan = document.getElementById("packageName");

    inquireButtons.forEach(button => {
        button.addEventListener("click", () => {
            const packageName = button.getAttribute("data-package");
            packageNameSpan.textContent = packageName;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    const inquiryForm = document.getElementById("inquiryForm");
    inquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your inquiry has been submitted!");
        inquiryForm.reset();
        modal.style.display = "none";
    });
});
