import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import API from '../../services/api';
import { BASE_IMAGE_URL, PlACEHOLDER_POSTER_URL } from 'constants/constants';
import {
  MovieBox,
  MovieImg,
  MovieInfo,
  MovieAdditionalBox,
  MovieGenres,
  MovieAdditionalTitle,
  MovieAdditionalList,
  Link,
} from './MovieDetails.styled';
import { BackButton } from 'components/BackButton/BackButton';

const MovieDetails = () => {
  // Використовуємо хуки для отримання movieId та поточного шляху роутера
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { pathname, search } = useLocation();
  const fromPage = `${pathname}${search}`;

  // Використовуємо хук useEffect для отримання даних про фільм з API
  useEffect(() => {
    getMovieById();

    async function getMovieById() {
      try {
        const fetchMovie = await API.fetchMovieById(Number(movieId));
        // console.log(fetchMovie);
        setMovie(fetchMovie);
      } catch (error) {
        // console.log(error);
      }
    }
  }, [movieId]);

  // Якщо дані про фільм ще не завантажилися, повертаємо null
  if (!movie) {
    return null;
  }

  // Витягуємо дані про фільм
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  // Формуємо URL для зображення фільму
  const imagePath = poster_path
    ? BASE_IMAGE_URL + poster_path
    : PlACEHOLDER_POSTER_URL;

  // Витягуємо рік виходу фільму
  const year = release_date ? release_date.slice(0, 4) : `No year`;

  // Функція для розрахунку рейтингу фільму в процентах
  const userScore = () => {
    return Math.round(vote_average * 10);
  };

  return (
    <main>
      <BackButton>Go back</BackButton>

      <MovieBox>
        <MovieImg src={imagePath} alt={title} width="200" />
        <MovieInfo>
          <h2>
            {title}
            <span> ({year})</span>
          </h2>
          <p>User Score {userScore()}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <MovieGenres>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </MovieGenres>
        </MovieInfo>
      </MovieBox>

      <MovieAdditionalBox>
        <MovieAdditionalTitle>Additional infomation</MovieAdditionalTitle>
        <MovieAdditionalList>
          <li>
            <Link to="cast" state={{ from: fromPage }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: fromPage }}>
              Reviews
            </Link>
          </li>
        </MovieAdditionalList>
      </MovieAdditionalBox>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
