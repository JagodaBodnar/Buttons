import styled from "styled-components";

export const StyledFormContainer = styled.form`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  margin: 10px 0 0 0;
`;

export const StyledInput = styled.input`
  border: 1px solid gray;
  outline: none;
  margin: 10px 0;
  font-family: "Oswald", sans-serif;
`;

export const StyledFormButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.blue};
  border: 1px solid ${({ theme }) => theme.blue};
  outline: none;
  padding: 5px 10px;
  align-self: flex-end;
  cursor: pointer;
  transition: 1s;
  &:hover {
    box-shadow: inset 6.5em 0 0 0 ${({ theme }) => theme.blue};
    color: #fff;
  }
`;

export const StyledSpanError = styled.span`
  font-size: 12px;
  color: red;
`;
