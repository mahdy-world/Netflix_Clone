
const API_KEY = "a4dd0143009424ac6bd71c6b905f334f";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
    fetchAction: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,


};

export default requests;