import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieBox = styled.div`
  display: flex;
  padding: 0 0 16px 0;
  border-bottom: 1px solid black;
`;

export const MovieImg = styled.img`
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 
  0px 4px 4px rgb(0 0 0 / 6%), 
  1px 4px 6px rgb(0 0 0 / 16%);
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

export const MovieGenres = styled.ul`
  display: flex;
  gap: 8px;
`;

export const MovieAdditionalBox = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid black;
  text-align: center;
`;

export const MovieAdditionalTitle = styled.h2`
  margin-bottom: 12px;
`;

export const MovieAdditionalList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  font-size: 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &.active {
    color: white;
    background-color: gray;
  }
  :hover:not(.active),
  :focus-visible:not(.active){
    color: gray;
  }
`;