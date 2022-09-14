import React from "react";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back-icon.svg";
import { ReactComponent as FaceBookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as MoreHorizontalIcon } from "../../assets/icons/more-horizontal-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right-icon.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/icons/chevron-down-icon.svg";
import { SubscribeForm } from "../../components/SubscribeForm/SubscribeForm";
import { Title } from "../../components/Title/Title";
import {
  ArrowsBox,
  BookInfoBox,
  BookPageContainer,
  InfoAboutBookBox,
  PreviewBook,
  Price,
  SimilarBookBox,
  SimilarTitle,
  SocialNetworksItem,
  SocialNetworksList,
  TitleBox,
  Edition,
  ProductInfo,
  MoreDetails,
  TextPreviewBook,
  DescriptionList,
  DescriptionItem,
  DescriptionBox,
  Description,
  ButtonAddToCart,
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
      <BookInfoBox>
        <BookItem />
        <PreviewBook>
          <Price>$ 41.57</Price>
          <InfoAboutBookBox>
            <Edition>Authors</Edition>
            <ProductInfo>Lentin Joseph, Aleena Johny</ProductInfo>
            <Edition>Publisher</Edition>
            <ProductInfo>Apress, 2022 </ProductInfo>
            <Edition>Language</Edition>
            <ProductInfo>English</ProductInfo>
            <Edition>Format</Edition>
            <ProductInfo>Paper book / ebook (PDF)</ProductInfo>
            <MoreDetails>
              More detailse
              <ChevronDownIcon
                style={{ position: "absolute", top: 4, right: -22 }}
              />
            </MoreDetails>
            <ButtonAddToCart type="submit">ADD TO CART</ButtonAddToCart>
            <TextPreviewBook>Preview book</TextPreviewBook>
          </InfoAboutBookBox>
        </PreviewBook>
      </BookInfoBox>
      <DescriptionList>
        <DescriptionItem>Description</DescriptionItem>
        <DescriptionItem>Authors</DescriptionItem>
        <DescriptionItem>Reviews</DescriptionItem>
      </DescriptionList>
      <DescriptionBox>
        <Description>
          Start programming your own robots using Robot Operation System (ROS).
          Targeted for absolute beginners in ROS, Linux, and Python, this guide
          lets you build your own robotics projects. You'll learn the basic
          foundation of Ubuntu Linux. Begin with the fundamentals. Installation
          and useful commands will give you the basic tools you need while
          programming a robot. Then add useful software applications that can be
          used while making robots. Programming robots can be done using any of
          the programming languages. Most popular programming languages are
          Python and C++.
        </Description>
      </DescriptionBox>
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
