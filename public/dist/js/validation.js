$(document).ready(() => {
  const searchInput = $(".search-input");
  const searchBtn = $(".search-btn");
  const searchForm = $(".search-form");

  searchForm.on("submit", e => {
    e.preventDefault();
    searchByCity();
  });
  searchBtn.on("click", e => {
    searchByCity();
  });

  function searchByCity() {
    if (searchInput.val() === "") {
      return false;
    }
    const searchValue = String(searchInput.val())
      .trim()
      .toLowerCase();
    searchInput.val("");
    fetch(`${location.href}api/city?name=${searchValue}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  }
});
