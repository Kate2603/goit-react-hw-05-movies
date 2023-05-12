import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import API from '../../services/api';
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { CastItem } from './CastItem/CastItem';
import { CastList } from './Cast.styled';

const Cast = () => {
  /*  "movieId" отримується з URL-адреси за допомогою хука "useParams" */
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  /* "useEffect" викликає функцію "getMovieCredits" при 
  кожній зміні значення "movieId". Ця функція отримує 
  список акторів з API за допомогою функції 
  "fetchMovieCredits", обрізає список до перших 16 акторів
   та оновлює стан "cast". */
  useEffect(() => {
    getMovieCredits();

    async function getMovieCredits() {
      try {
        const fetchCast = await API.fetchMovieCredits(movieId);

        const actors =
          fetchCast.length > 16 ? fetchCast.slice(0, 16) : fetchCast;
        // console.log(actors);
        setCast(actors);
      } catch (error) {
        // console.log(error);
      }
    }
  }, [movieId]);

  /*  перевіряm, чи є список акторів відомим і, якщо ні, то повертає null */
  if (!cast) return null;

  return (
    <CastList>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <CastItem
          key={id}
          imagePath={
            profile_path ? BASE_IMAGE_URL + profile_path : PlACEHOLDER_IMAGE_URL
          }
          name={original_name}
          character={character}
        />
      ))}
      <Outlet />
    </CastList>
  );
};

export default Cast;
