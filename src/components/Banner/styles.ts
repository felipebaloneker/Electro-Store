import styled from 'styled-components';

export const StyledCircle = styled.div`
  display: flex;
  width: 7rem;
  height: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--highlight-color);
  color: var(--text-color-light);
  font-size: 1.7rem;
  border-radius: 100%;
  margin: 1rem;
  font-weight: 700;
  span {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const StyledButton = styled.button`
  all: unset;
  width: 10rem;
  padding: 1rem;
  border-radius: 2rem;
  transition: 0.2s ease;
  background-color: var(--highlight-color);
  color: var(--text-color-light);
  font-weight: 700;
  font-size: 1rem;
  transition: 0.5s ease;
  cursor: pointer;
`;
