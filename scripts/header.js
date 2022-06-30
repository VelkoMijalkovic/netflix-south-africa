const app = Vue.createApp({
  data() {
    return {
      menu: ["Home", "Tv Shows", "Movies", "Latest", "My List"],
      isActive: false,
      scrollPerClick: 250,
      imagePadding: 20,
      scrollAmount: 0,
      
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
          const sliders = document.getElementById("Latest");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    showLatestTV() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
          API_KEY +
          "&with_networks=213"
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
          const sliders = document.getElementById("LatestTV");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    showComedy() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          API_KEY +
          "&with_genres=35"
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
          const sliders = document.getElementById("Comedy");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    showKids() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
          API_KEY +
          "&with_genres=10762"
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
          const sliders = document.getElementById("Kids");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    showHorror() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          API_KEY +
          "&with_genres=27"
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
          const sliders = document.getElementById("Horror");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    showDocumentary() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=" +
          API_KEY +
          "&with_genres=99"
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
          const sliders = document.getElementById("Documentary");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    showMusical() {
      const API_KEY = "856bf84a340e6a4e0b3c55c48d17ae07";

      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          API_KEY +
          "&with_genres=10402"
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
          const sliders = document.getElementById("Musical");
          result = result.results;
          result.map(function (x, index) {
            sliders.insertAdjacentHTML(
              "beforeend",
              `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${x.poster_path}"/>`
            );
          });
        });
      
    },
    sliderScrollLeft(genre) {
      let sliders = document.getElementById(genre);
      sliders.scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });
      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },
    sliderScrollRight(genre) {
      const sliders = document.getElementById(genre);
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
    this.showComedy();
    this.showLatestTV();
    this.showKids();
    this.showHorror();
    this.showDocumentary();
    this.showMusical();
  },
});







