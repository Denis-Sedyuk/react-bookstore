import React from "react";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back-icon.svg";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as MoreHorizontalIcon } from "../../assets/icons/more-horizontal-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right-icon.svg";
import { SubscribeForm } from "../../components/SubscribeForm/SubscribeForm";
import { Title } from "../../components/Title/Title";
import {
  ArrowsBox,
  BookInfoBox,
  BookPageContainer,
  SimilarBookBox,
  SimilarTitle,
  SocialNetworksItem,
  SocialNetworksList,
  TitleBox,
} from "./styles";
import { BookItem } from "../../components/BookItem/BookItem";

export const BookPage = () => {
  return (
    <BookPageContainer>
      <TitleBox>
        <ArrowBackIcon />
        <Title>
          Robot Operating System (ROS) for Absolute Beginners, 2nd Edition
        </Title>
      </TitleBox>
      <BookInfoBox></BookInfoBox>
      <SocialNetworksList>
        <SocialNetworksItem>
          <a href="https://www.facebook.com/" target="blank">
            <FaceBookIcon />
          </a>
        </SocialNetworksItem>
        <SocialNetworksItem>
          <a href="https://twitter.com/" target="blank">
            <TwitterIcon />
          </a>
        </SocialNetworksItem>
        <SocialNetworksItem>
          <MoreHorizontalIcon />
        </SocialNetworksItem>
      </SocialNetworksList>
      <SubscribeForm />
      <SimilarBookBox>
        <SimilarTitle>Similar Books</SimilarTitle>
        <ArrowsBox>
          <ArrowLeftIcon />
          <ArrowRightIcon />
        </ArrowsBox>
        <BookItem />
        <BookItem />
        <BookItem />
      </SimilarBookBox>
    </BookPageContainer>
  );
};
