import { useToggle } from "../../hooks/useToggle";
import { Button, StyledCheckModeButton } from "./styles";

interface IProps {
  mode: string;
  setMode: (value: string) => void;
}

export const CheckMode = ({ setMode }: IProps) => {
  const handleSetDescription = () => {
    setMode("description");
  };

  const handleSetAuthors = () => {
    setMode("authors");
  };

  const handleSetBook = () => {
    setMode("book");
  };
  return (
    <StyledCheckModeButton>
      <Button onClick={handleSetDescription}>Descriptions</Button>
      <Button onClick={handleSetAuthors}>Authors</Button>
      <Button onClick={handleSetBook}>Book</Button>
    </StyledCheckModeButton>
  );
};
