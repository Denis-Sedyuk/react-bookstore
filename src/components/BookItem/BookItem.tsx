import React from "react";
import { Author, BookPhoto, BookTitle, Price, StyledItem } from "./styles";
import { ReactComponent as BookImage } from "../../assets/images/bookrobot.svg";
import { Link } from "react-router-dom";

export const BookItem = () => {
  return (
    <StyledItem>
      <Link to={"book"}>
        <BookPhoto>
          <BookImage />
        </BookPhoto>
      </Link>
      <Link to={"book"}>
        <BookTitle>
          Robot Operating System (ROS) for Absolute Beginners{" "}
        </BookTitle>
      </Link>
      <Author>by Lentin Joseph, Apress 2018</Author>
      <Price>$31.38 </Price>
    </StyledItem>
  );
};
