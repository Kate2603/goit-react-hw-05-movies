import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import API from '../../services/api';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  Message,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  /* useEffect() виконує функцію "getMovieReviews" при 
  кожному оновленні компонента. У цій функції запитуються 
  відгуки про фільм з API за допомогою методу 
  "fetchMovieReviews" з імпортованої API. Отримані 
  відгуки зберігаються в стані за допомогою setReviews(). */
  useEffect(() => {
    getMovieReviews();
    async function getMovieReviews() {
      const fetchReviews = await API.fetchMovieReviews(movieId);
      // console.log(fetchReviews);
      setReviews(fetchReviews);
    }
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsTitle>Author: {author}</ReviewsTitle>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <Message>We don't have any reviews for this movie</Message>
      )}
      <Outlet />
    </>
  );
};
export default Reviews;
