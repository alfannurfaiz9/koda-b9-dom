const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGNhZjM1YzliZTczMzZhYjdhYjc0Y2IwMGMyMGMyNiIsIm5iZiI6MTc4NjAxNzgyMi41NTQsInN1YiI6IjZhNzQ3ODFlZWI1YzU4ODE5NTM5ZmMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SOeEJljaUA3TOpq3tTIUzzqsoKX5x9DOLAwjX7UPAT4";

const getMovie = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/502356",
      {
        accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const { data } = await response;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCrew = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/502356/credits",
      {
        accept: "application/json",
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const { data } = await response;

    return {
      cast: data.cast.filter((cast, idx) => idx < 3),
      crew: data.crew.filter((data) => data.job.toLowerCase() === "director"),
    };
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const movie = await getMovie();
    const crew = await getCrew();

    const container = document.querySelector("#movie-container");

    const article = document.createElement("article");
    article.setAttribute(
      "class",
      "flex flex-col lg:flex-row lg:justify-start lg:gap-5 rounded-2xl overflow-hidden",
    );

    const divImg = document.createElement("div");
    divImg.setAttribute("class", "flex items-center");
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
    );
    img.setAttribute("alt", "image-poster");
    img.setAttribute("class", "lg:w-64 object-contain rounded-xl lg:basis-lg");

    divImg.append(img);

    const divDetails = document.createElement("div");
    divDetails.setAttribute(
      "class",
      "py-8 px-4 flex justify-between flex-col gap-3 lg:basis-6xl",
    );
    const h2 = document.createElement("h2");
    h2.innerText = movie.title;
    h2.setAttribute("class", "font-bold text-xl");

    const divGenres = document.createElement("div");
    divGenres.setAttribute("class", "flex flex-wrap gap-2");

    movie.genres.forEach((genre) => {
      const p = document.createElement("p");
      p.setAttribute(
        "class",
        "py-1 px-2 border-1 text-sm border-gray-400 text-gray-400 rounded-4xl",
      );
      p.innerText = genre.name;

      divGenres.append(p);
    });

    const divRating = document.createElement("div");
    divRating.setAttribute("class", "flex items-center gap-2");
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "w-8");
    const tmdbLogo = document.createElement("img");
    tmdbLogo.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/960px-IMDB_Logo_2016.svg.png?utm_source=id.wikibooks.org&utm_campaign=index&utm_content=thumbnail",
    );
    tmdbLogo.setAttribute("alt", "imdb-logo");

    imageWrapper.append(tmdbLogo);

    const rating = document.createElement("p");
    rating.setAttribute("class", "text-gray-400");
    rating.textContent = movie.vote_average.toFixed(1);

    const ratingSpan = document.createElement("span");
    ratingSpan.setAttribute("class", "text-yellow-500");
    ratingSpan.textContent = "★";

    divRating.append(rating, ratingSpan, imageWrapper);

    const overview = document.createElement("p");
    overview.setAttribute("class", "text-gray-400");
    overview.textContent = movie.overview;

    const divButton = document.createElement("div");
    divButton.setAttribute("class", "flex flex-wrap gap-4");

    const watchlistButton = document.createElement("a");
    watchlistButton.setAttribute(
      "class",
      "py-2 px-4 border-1 text-sm border-white rounded-3xl cursor-pointer",
    );
    watchlistButton.textContent = "ADD TO WATCHLISTS";

    divButton.append(watchlistButton);

    const crewContainer = document.createElement("div");
    crewContainer.setAttribute("class", "flex gap-2");

    const crewTitle = document.createElement("p");
    crewTitle.innerText = "Director:";

    const crewDiv = document.createElement("div");
    crewDiv.setAttribute("class", "flex gap-2");

    crew.crew.forEach((c, i) => {
      const director = document.createElement("p");

      if (i === crew.crew.length - 1) {
        director.innerText = c.name;
      } else {
        director.innerText = `${c.name} ,`;
      }

      crewDiv.append(director);
    });

    crewContainer.append(crewTitle, crewDiv);

    const castContainer = document.createElement("div");
    castContainer.setAttribute("class", "flex gap-2");

    const castTitle = document.createElement("p");
    castTitle.innerText = "Cast:";

    const castDiv = document.createElement("div");
    castDiv.setAttribute("class", "flex gap-2");

    crew.cast.forEach((c, i) => {
      const castP = document.createElement("p");
      if (i === crew.cast.length - 1) {
        castP.innerText = c.name;
      } else {
        castP.innerText = `${c.name} ,`;
      }

      castDiv.append(castP);
    });

    castContainer.append(castTitle, castDiv);

    divDetails.append(
      divGenres,
      h2,
      divRating,
      overview,
      crewContainer,
      castContainer,
      divButton,
    );

    article.append(divImg, divDetails);
    container.append(article);
  } catch (error) {
    console.log(error);
  }
});
