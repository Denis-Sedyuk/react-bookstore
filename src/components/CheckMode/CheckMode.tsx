import { useState } from "react";
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
  return (
    <StyledCheckModeButton>
      <Button onClick={handleSetDescription}>Descriptions</Button>
      <Button onClick={handleSetAuthors}>Authors</Button>
    </StyledCheckModeButton>
  );
};
