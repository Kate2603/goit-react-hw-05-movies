import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesCard, StyledLink, MoviesImg, MoviesCardInfo, MoviesTitle, MoviesVote } from "./MoviesItem.styled";

/*  "MoviesItem" використовує "useLocation" для отримання 
шляху до поточної сторінки та зберігає його у змінній "fromPage" */
export const MoviesItem = ({ id, title, imagePath, vote }) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;

    return (
        <MoviesCard>
            <StyledLink to={`/movies/${id}`} state={{from: fromPage}}>
                <MoviesImg src={imagePath} alt={title} />
                <MoviesCardInfo>
                    <MoviesTitle>{title}</MoviesTitle>
                    <MoviesVote>{vote}
                    </MoviesVote>
                </MoviesCardInfo>
            </StyledLink>
        </MoviesCard>
    );
};

MoviesItem.propTypes = {
    // id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // vote: PropTypes.number.isRequired,
}