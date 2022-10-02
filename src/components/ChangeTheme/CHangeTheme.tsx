import { useTheme } from "../../hooks/useTheme";
import { StyledButton } from "./styles";

export const CHangeTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <StyledButton type="button" onClick={toggleTheme} whileHover={{ scale: 1.1 }}>
      {theme === "dark" ? "ight" : "dark"}
    </StyledButton>
  );
};
