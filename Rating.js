function toggleFilter() {
  const filterOptions = document.querySelector(".filter-options");
  filterOptions.classList.toggle("hidden");
}
document.addEventListener("click", function(event) {
  const filterOptions = document.querySelector(".filter-options");
  const filterToggleButton = document.querySelector(".filter-toggle");
  if (!filterOptions.contains(event.target) && !filterToggleButton.contains(event.target)) {
    filterOptions.classList.add("hidden");
  }
});
function searchByRating(rating) {
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card) => {
    const movieRating = parseInt(card.getAttribute("data-rating"));
    if (rating === 0 || movieRating === rating) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
