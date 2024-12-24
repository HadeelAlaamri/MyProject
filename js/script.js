// Example JavaScript for functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("نبهت الموقع جاهز للعمل!");

    // Adding a simple event listener to change text on hero section
    const heroText = document.querySelector('.hero p');
    heroText.addEventListener('click', function() {
        heroText.textContent = "لقد قمت بالنقر على النص!";
    });
});

