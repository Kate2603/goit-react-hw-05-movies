import { useState, useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import API from '../../services/api';
import { toast } from 'react-toastify';
import { MoviesList } from './Movies.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';

// компонент фільмів
const Movies = () => {
  // використовуємо хуки React для створення та оновлення станів
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // використовуємо useEffect, щоб отримати фільми при кожному оновленні search query
  useEffect(() => {
    if (!query) {
      // Якщо query є порожньою строкою, то не виконуємо запит до API
      return;
    }
    setIsLoading(true);
    getSearchMovies();

    async function getSearchMovies() {
      try {
        // запит до API за фільмами зі введеною search query
        const fetchMovies = await API.fetchSearchMovies(query);
        // console.log(fetchMovies);
        // оновлюємо список фільмів
        setMovies(fetchMovies);
      } catch (error) {
        // console.log(error);
        // повідомляємо користувача, що не знайдено фільмів за даним запитом
        toast.error(
          `Sorry, there are no movies matching your search query. Please try again.`
        );
      } finally {
        setIsLoading(false);
      }
    }
  }, [query]);

  // обробник події для подання форми пошуку
  const handleFormSubmit = query => {
    // console.log(query);

    // оновлюємо search query та список фільмів
    setQuery(query);
    setMovies([]);
  };

  // оновлюємо search query в адресному рядку браузера
  const updateQueryString = value => {
    setSearchParams(value !== '' ? { search: value } : {});
  };

  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} onChange={updateQueryString} />

      {isLoading && <Loader />}

      <MoviesList>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <MoviesItem
            key={id}
            id={id}
            title={title}
            imagePath={
              poster_path ? BASE_IMAGE_URL + poster_path : PlACEHOLDER_IMAGE_URL
            }
            vote={vote_average ? vote_average.toFixed(1) : `No vote`}
          />
        ))}
      </MoviesList>
      <Outlet />
    </main>
  );
};

export default Movies;
