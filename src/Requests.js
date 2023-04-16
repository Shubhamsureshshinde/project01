const Api_KEY = "6deaf7a2123c016bcb1a2818df7515a8"

//https://api.themoviedb.org/3/movie/popular?api_key=6deaf7a2123c016bcb1a2818df7515a8&language=en-US&page=1
const requests = {
    // https://api.themoviedb.org/3/discover/movies?api_key=6deaf7a2123c016bcb1a2818df7515a8&with_genres=28

    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${Api_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${Api_KEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_KEY}&language=en-US&page=1`,
    fetchUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_KEY}&language=en-US&page=1`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${Api_KEY}&language=en-US&page=1`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movies?api_key=${Api_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movies?api_key=${Api_KEY}&with_genres=35`,
    fetchHorrerMovies: `https://api.themoviedb.org/3/discover/movies?api_key=${Api_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movies?api_key=${Api_KEY}&with_genres=0749`,
    fetchDocumentries: `https://api.themoviedb.org/3/discover/movies?api_key=${Api_KEY}&with_genres=99`

}

export default requests