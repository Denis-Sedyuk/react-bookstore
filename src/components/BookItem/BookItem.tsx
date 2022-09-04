import React from "react";
import { Author, BookPhoto, BookTitle, Price, StyledItem } from "./styles";
import { ReactComponent as BookImage } from "../../assets/bookrobot.svg";

export const BookItem = () => {
  return (
    <StyledItem>
      <BookPhoto>
        <BookImage />
      </BookPhoto>
      <BookTitle>
        Robot Operating System (ROS) for Absolute Beginners{" "}
      </BookTitle>
      <Author>by Lentin Joseph, Apress 2018</Author>
      <Price>$31.38 </Price>
    </StyledItem>
  );
};
