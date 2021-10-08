import styled, { css } from "styled-components";

export const StyledListContainer = styled.ul`
  list-style: none;
`;

export const StyledUserButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  ${({ add }) =>
    add &&
    css`
      color: green;
    `}
  ${({ remove }) =>
    remove &&
    css`
      color: red;
    `}
`;
