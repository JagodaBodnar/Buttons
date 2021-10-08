import React from "react";
import { useSpring, animated } from "react-spring";
import {
  StyledButton,
  StyledDarkButton,
  StyledLightButton,
  StyledSpanDark,
  StyledSpanLight,
} from "./ToggleStyles";

const ThemeButton = ({ theme, toggleTheme }) => {
  const anim = useSpring({
    config: { duration: 500 },
    opacity: theme === "dark" ? "0" : "1",
    transform: theme === "dark" ? "translateX(50px)" : "translateX(0px)",
  });
  const animDark = useSpring({
    config: { duration: 500 },
    opacity: theme === "dark" ? "1" : "0",
    transform: theme === "dark" ? "translateX(0px)" : "translateX(-50px)",
  });
  return (
    <>
      <StyledButton
        onClick={() => {
          toggleTheme();
        }}
      >
        <StyledSpanLight theme={theme}>Light</StyledSpanLight>
        <StyledSpanDark theme={theme}>Dark</StyledSpanDark>
        <animated.div style={anim}>
          <StyledLightButton></StyledLightButton>
        </animated.div>
        <animated.div style={animDark}>
          <StyledDarkButton></StyledDarkButton>
        </animated.div>
      </StyledButton>
    </>
  );
};

export default ThemeButton;
