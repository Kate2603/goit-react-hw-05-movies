import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import API from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { HomeTitle, MoviesList } from './Home.styled';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

const Home = () => {
  /* Створюємо стан для списку популярних фільмів та індикатора завантаження */
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* Використовуємо хук useEffect для отримання списку 
  популярних фільмів при завантаженні сторінки */
  useEffect(() => {
    setIsLoading(true); // Встановлюємо індикатор завантаження
    getTrendinngMovies(); // Отримуємо список популярних фільмів

    async function getTrendinngMovies() {
      try {
        const fetchMovies = await API.fetchTrendingMovies();
        // console.log(fetchMovies);
        setTrendingMovies(fetchMovies); // Оновлюємо стан зі списком фільмів
      } catch (error) {
        // Обробляємо помилки виконання запиту до API
        // console.log(error);
      } finally {
        setIsLoading(false); // Вимикаємо індикатор завантаження
      }
    }
  }, []); // Передаємо пустий масив залежностей, щоб хук виконався тільки при завантаженні сторінки

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>

      {isLoading && <Loader />}

      <MoviesList>
        {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
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

export default Home;
