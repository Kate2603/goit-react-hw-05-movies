import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 16px 0 8px 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
          
:hover{
  color: gray;
}
`;