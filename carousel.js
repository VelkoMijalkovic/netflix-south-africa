const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var imagePadding = 20;
let result;
showMovieData();

var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}
function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}
async function showMovieData() {
  const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";
 
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      API_KEY +
      "&sort_by=popularity.desc"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("error");
      }
    })
    .then((data) => {
      result = data;
      console.log(result);
    
  result = result.results;
  result.map(function (x, index) {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
    );
  });
  });
  scrollPerClick = 500;
}
