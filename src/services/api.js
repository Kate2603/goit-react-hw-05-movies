import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '157ba8f88df5d741a5271cb474478bff',
        language: 'en-US',
    },
});

// функція, яка отримує список актуальних фільмів за добу з TMDb та повертає їх у вигляді масиву об'єктів
async function fetchTrendingMovies() {
    const response = await apiInstance.get('trending/movie/day');
     
    const trendingMovies = response.data.results;

    if (!trendingMovies.length) {
        throw new Error(`Sorry, there are no movies.`)
    }

    return trendingMovies;
};

//функція, яка отримує деталі конкретного фільму за його id та повертає їх у вигляді об'єкта
async function fetchMovieById(id) {
    const { data } = await apiInstance.get(`movie/${id}`);

    return data;
}

//функція, яка шукає фільми за заданим запитом та повертає їх у вигляді масиву об'єктів
async function fetchSearchMovies(query) {
    const response = await apiInstance.get(`search/movie?query=${query}`);

    const searchMovies = response.data.results;

    if (!searchMovies.length) {
        throw new Error(`Sorry, there are no movies matching your search query. Please try again.`)
    }

    return searchMovies;
}

// функція, яка отримує каст фільму за його id та повертає їх у вигляді масиву об'єктів
async function fetchMovieCredits(id) {
    const response = await apiInstance.get(`movie/${id}/credits`);

    const cast = response.data.cast;

    if (!cast.length) {
        throw new Error(`Not found cast...`)
    }

    return cast;
}

// функція, яка отримує рецензії на фільм за його id та повертає їх у вигляді масиву об'єктів
async function fetchMovieReviews(id) {
    const response = await apiInstance.get(`movie/${id}/reviews`);

    const reviews = response.data.results;

    return reviews;
};

//об'єкт, що містить всі функції, які можна використовувати для звернень до API
const api = {
    fetchTrendingMovies,
    fetchMovieById,
    fetchSearchMovies,
    fetchMovieCredits,
    fetchMovieReviews,
};

export default api;