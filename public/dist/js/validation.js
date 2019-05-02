$(document).ready(() => {
  const searchInput = $(".search-input");
  const searchBtn = $(".search-btn");

  searchBtn.on("click", e => {
    if (searchInput.val() === "") {
      return false;
    }
    const searchValue = searchInput.val();
  });
});
