import styled from "styled-components";

export const CardWrapper = styled.li`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 
   0 1px 1px 0 rgb(0 0 0 / 14%),
   0 2px 1px -1px rgb(0 0 0 / 12%);
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  text-align: center;
  font-size: 12px;
`;

export const CardText = styled.p`
  margin-top: auto;
`;