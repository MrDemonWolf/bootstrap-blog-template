SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})

$(document).ready(function () {
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });
});
