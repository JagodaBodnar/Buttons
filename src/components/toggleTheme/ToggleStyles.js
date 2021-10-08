import styled from "styled-components";

export const lightTheme = {
  body: "#fefefe",
  text: "#1a2026",
  blue: "#0278ae",
  green: "#16a682",
  gray: "#353336",
  lightGray: "#ddd",
};

export const darkTheme = {
  body: "#363537",
  text: "#E1DEE2",
  blue: "#35A8CE",
  green: "#4bd1b0",
  gray: "#bebbbf",
  lightGray: "#ddd",
};

export const StyledButton = styled.div`
  margin: 20px auto;
  background-color: ${({ theme }) => theme.lightGray};
  width: 100px;
  height: 25px;
  border: ${({ theme }) => `1px solid ${theme.lightGray}`};
  border-radius: 50px;
  position: relative;
  outline: none;
  cursor: pointer;
`;
export const StyledLightButton = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.body};
  position: absolute;
  left: 0;
  top: -1px;
  cursor: pointer;
  outline: none;
  border: ${({ theme }) => `1px solid ${theme.lightGray}`};
`;
export const StyledDarkButton = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 50px;
  background-color: #363537;
  position: absolute;
  right: 0;
  top: -1px;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.lightGray}`};
  outline: none;
`;
export const StyledSpanLight = styled.span`
  position: absolute;
  left: 10px;
  top: 3px;
  color: ${({ theme }) => (theme === "light" ? "#222222" : "#676566")};
  z-index: 1;
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`;
export const StyledSpanDark = styled.span`
  position: absolute;
  font-size: 13px;
  right: 10px;
  top: 3px;
  color: ${({ theme }) => (theme === "light" ? "#676566" : "#fefefe")};
  z-index: 1;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`;
