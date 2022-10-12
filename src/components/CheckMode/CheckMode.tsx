import { Color } from "ui";
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
      <Button
        onClick={handleSetDescription}
        whileHover={{ scale: 1.1 }}
        whileFocus={{ scale: 1.1, color: `${Color.Primary}` }}
      >
        Descriptions
      </Button>
      <Button
        onClick={handleSetAuthors}
        whileHover={{ scale: 1.1 }}
        whileFocus={{ scale: 1.1, color: `${Color.Primary}` }}
      >
        Authors
      </Button>
      <Button
        onClick={handleSetBook}
        whileHover={{ scale: 1.1 }}
        whileFocus={{ scale: 1.1, color: `${Color.Primary}` }}
      >
        Book
      </Button>
    </StyledCheckModeButton>
  );
};
