document.addEventListener("DOMContentLoaded", function() {
    const ourProductNavItem = document.querySelector(".our_product_nav_item");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    ourProductNavItem.addEventListener("mouseenter", function() {
        dropdownMenu.style.display = "flex";
    });

    ourProductNavItem.addEventListener("mouseleave", function() {
        dropdownMenu.style.display = "none";
    });

    const backToTopButton = document.querySelector(".back_to_top");
    // Function to toggle the visibility of the back to top button
    function toggleBackToTopButton() {
        if (window.scrollY > window.innerHeight) {
        backToTopButton.classList.add("show-back-to-top");
        } else {
        backToTopButton.classList.remove("show-back-to-top");
        }
    }
    // Event listener for scroll event
    window.addEventListener("scroll", toggleBackToTopButton);

    const menuBar = document.querySelector(".menubar");
    const modalMenu = document.querySelector(".modal_menu");
    menuBar.addEventListener("click", function() {
        modalMenu.classList.toggle("show");
    });
});


const dropdownContent = document.querySelector('.dropdown-menu');
dropdownContent.addEventListener("mouseenter", function(){
    dropdownContent.style.display = "flex";
})
dropdownContent.addEventListener("mouseleave", function(){
    dropdownContent.style.display = "none";
})