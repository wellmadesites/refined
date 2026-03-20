document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/Hide Button Gradually Based on Scroll Position
  window.addEventListener("scroll", function () {
    const scrollHeight = document.documentElement.scrollHeight; // Total page height
    const scrollPosition = window.scrollY; // Current scroll position
    const viewportHeight = window.innerHeight; // Height of the visible area

    // If scrolled more than 30% of the page, fade in the button
    if (scrollPosition > (scrollHeight - viewportHeight) * 0.3) {
      backToTopButton.style.opacity = "1"; // Fully visible
      backToTopButton.style.pointerEvents = "auto"; // Enable clicking
    } else {
      backToTopButton.style.opacity = "0"; // Fully transparent
      backToTopButton.style.pointerEvents = "none"; // Disable clicking
    }
  });

  // Smooth Scroll to Top
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
