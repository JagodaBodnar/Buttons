import styled from "styled-components";
import { device } from "./utility/Device";

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  font-family: "Oswald", sans-serif;
  @media ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
