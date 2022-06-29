const app = Vue.createApp({
  data() {
    return {
      menu: ["Home", "Tv Shows", "Movies", "Latest", "My List"],
      isActive: false,
      scrollPerClick: 500,
      imagePadding: 20,
      scrollAmount: 0,
      result: {},
    };
  },
  methods: {
    showLatest() {
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
          const sliders = document.getElementById("latest");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    sliderScrollLeft() {
      let sliders = document.querySelector(".carouselbox");
      sliders.scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });
      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },
    sliderScrollRight() {
      const sliders = document.querySelector(".carouselbox");
      if (this.scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
          top: 0,
          left: (this.scrollAmount += this.scrollPerClick),
          behavior: "smooth",
        });
      }
    },
  },
  created() {
    this.showLatest();
    
  },
});






