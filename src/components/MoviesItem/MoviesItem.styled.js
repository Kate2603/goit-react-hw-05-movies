import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesCard = styled.li`
  padding: 4px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 
  0px 4px 4px rgb(0 0 0 / 6%), 
  1px 4px 6px rgb(0 0 0 / 16%);
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus{
    transform: scale(1.03);
  };
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MoviesImg = styled.img`
  width: 100%;
  border-radius: 4px;
  height: 300px;
  object-fit: cover;
  margin-bottom: auto;
`;

export const MoviesCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 0 0;
`;

export const MoviesTitle = styled.h4`
  max-width: 158px; 
`;

export const MoviesVote = styled.p`
  padding: 2px 4px;
  border-radius: 4px;
  color: white;
  background-color: gray;
  font-size: 12px; 
  font-weight: 600;
`;