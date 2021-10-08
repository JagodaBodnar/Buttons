import styled, { css } from "styled-components";

export const StyledUserListContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

export const StyledList = styled.ul`
  list-style: none;
  & > * {
    margin-bottom: 10px;
  }
`;

export const StyledUserButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 20px;
  ${({ add }) =>
    add &&
    css`
      color: ${({ theme }) => theme.green};
    `}
  ${({ remove }) =>
    remove &&
    css`
      color: ${({ theme }) => theme.blue};
    `}
    ${({ filtering }) =>
    filtering &&
    css`
      color: ${({ theme }) => theme.gray};
      font-size: 25px;
    `}
`;
