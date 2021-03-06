import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const Search = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  border-radius: 2rem;
  align-items: center;
  background-color: #fff;
  width: 40rem;
  height: 3rem;
  margin-left: 0%;
  overflow: hidden;
`;
export const SearchButton = styled.button`
  all: unset;
  width: 15%;
  height: 100%;
  cursor: pointer;
  background-color: var(--highlight-color);
  color: var(--text-color-light);
  font-weight: 700;
  text-align: center;
  transition: 0.2s ease;
  &:hover {
    background-color: var(--text-color-menu);
  }
`;

export const LogoDot = styled.span`
  display: flex;
  width: 0.7rem;
  height: 0.7rem;
  background-color: var(--highlight-color);
  border-radius: 2rem;
  margin: 0.5rem 0.1rem;
  align-self: flex-end;
`;
export const MenuItem = styled.button`
  all: unset;
  padding: 1rem;
  cursor: pointer;
  display: block;
  font-family: monospace;
  color: #000;
  border: 0.2rem solid transparent;
  transition: 0.2s ease;
  &:hover {
    border-bottom: 0.2rem solid var(--highlight-color);
    color: var(--highlight-color);
  }
`;
export const SearchInputBase = styled(InputBase)``;
