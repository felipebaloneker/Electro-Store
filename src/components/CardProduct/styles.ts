import { Card, CardActionArea } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 20rem;
  height: 30rem;
`;

export const StyledCardAction = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
  text-align: center;
  transition: 0.2s ease;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    border: 0.15rem solid var(--highlight-color);
  }
  &:hover .hidden-content {
    display: flex;
  }
`;

export const StyledButton = styled.button`
  all: unset;
  width: 12rem;
  padding: 1rem;
  border-radius: 2rem;
  transition: 0.2s ease;
  background-color: var(--highlight-color);
  color: var(--text-color-light);
  font-weight: 700;
  font-size: 1rem;
  transition: 0.5s ease;
  &:hover {
    background-color: var(--text-color-light);
    color: var(--highlight-color);
  }
`;
