let movies = [
  {
    title: "The Man From Earth 1",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
    isFavourite: true,
  },
  {
    title: "The Man From Earth 2",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
    isFavourite: false,
  },
  {
    title: "The Man From Earth 3",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth.jpg",
    isFavourite: true,
  },
];
//prepareMovies(movies);

const search_text = document.querySelector(".search_text");

search_text.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    searchMovie();
  }
});

//sorgu atalım
async function searchMovie() {
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=f3b7ad3a&s=${search_text.value}`
  );

  const  data= await request.json();
  
let movies=data.Search.map(m=>{
    return{
        title : m.Title,
        description :`${m.Year}/${m.Type}`,
        poster : m.Poster === 'N/A' ? '/assets/images/default.png' : m.Poster,
        imdbID : m.imdbID,
        isFavourite :false
    }    
});
console.log(movies);
prepareMovies(movies);


//apiden alttaki formatta donuyor yukarıdaki map ile kendimize uygun hazıladık
  /*Poster: "https://m.media-amazon.com/images/M/MV5BOWI4NGQ1M2YtNDM2Yi00YzAzLWJmZmYtMjkxZWMwNmM5Y2NhXkEyXkFqcGdeQXVyMjQ2OTI2MzU@._V1_SX300.jpg"
  Title: "Hababam Sinifi"
  Type: "movie"
  Year: "1975"
  imdbID: "tt0252487"*/



}

//filmleri hazırla..
function prepareMovies(movies) {
    document.querySelector("#movies").innerHTML="";
  movies.forEach((movie) => {
    let movie_card = document.createElement("movie-card");
    movie_card.setAttribute("title", movie.title);
    movie_card.setAttribute("poster", movie.poster);
    movie_card.setAttribute("isFavourite", movie.isFavourite);
    movie_card.setAttribute("imdbID",movie.imdbID);
    movie_card.innerHTML = movie.description;

    document.querySelector("#movies").append(movie_card);
  });
}


