import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, DisLikeIcon } from "../../assets/index";
import {
  Title,
  SubscribeForm,
  ButtonBackPage,
  CheckMode,
  Like,
  Spinner,
  Error,
} from "../../components/index";
import {
  ArrowsBox,
  BookInfoBox,
  BookPageContainer,
  InfoAboutBookBox,
  PreviewBook,
  Price,
  SimilarBookBox,
  SimilarTitle,
  TitleBox,
  KeyAboutBook,
  MoreDetails,
  TextPreviewBook,
  DescriptionBox,
  ButtonAddToCart,
  Photo,
  BookPhotoBox,
  CostStarBox,
  ValueAboutBook,
  BasicAboutBookBox,
  Description,
  LikeBtn,
} from "./styles";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchBookDetails } from "../../store/feautures/bookDetailsSlice";
import { getBooksDetails } from "../../store/selectors/bookDetailsSelectors";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Color } from "../../ui/colors";
import { useToggle } from "../../hooks/useToggle";
import { addToFavotires } from "../../store/feautures/favoritesSlice";

export const BookPage = () => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [mode, setMode] = useState("description");
  const [isFavorites, setIsFavorites] = useState<boolean>(true);
  const navigate = useNavigate();
  const { isbn13 = "" } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, error, bookDetails } = useAppSelector(getBooksDetails);

  useEffect(() => {
    dispatch(fetchBookDetails(isbn13));
  }, [dispatch, isbn13]);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleDetalise = (): void => {
    toggleIsOpen();
  };

  const handleAddFavorites = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(addToFavotires(bookDetails));
    setIsFavorites(false);
  };

  const {
    title,
    image,
    price,
    rating,
    authors,
    publisher,
    year,
    pages,
    url,
    desc,
    subtitle,
    pdf,
    isbn10,
  } = bookDetails;
  return (
    <BookPageContainer>
      <TitleBox>
        <ButtonBackPage onCLick={handleBackPage} type="button" />
        <Title>{title}</Title>
      </TitleBox>
      <BookInfoBox>
        <BookPhotoBox>
          <Photo src={image} />
          {isFavorites ? (
            <LikeBtn onClick={handleAddFavorites}>
              <Like />
            </LikeBtn>
          ) : (
            <LikeBtn>
              <DisLikeIcon />
            </LikeBtn>
          )}
        </BookPhotoBox>
        <PreviewBook>
          <CostStarBox>
            <Price>{price === "$0.00" ? "Is free" : bookDetails.price}</Price>
            <Rating
              readonly={true}
              ratingValue={+rating * 20}
              size={25}
              fillColor={Color.Primary}
            />
          </CostStarBox>
          <InfoAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Authors</KeyAboutBook>
              <ValueAboutBook>{authors}</ValueAboutBook>
            </BasicAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Publisher</KeyAboutBook>
              <ValueAboutBook>{publisher}</ValueAboutBook>
            </BasicAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Year</KeyAboutBook>
              <ValueAboutBook>{year}</ValueAboutBook>
            </BasicAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Pages</KeyAboutBook>
              <ValueAboutBook>{pages}</ValueAboutBook>
            </BasicAboutBookBox>
            {isOpen && (
              <>
                <BasicAboutBookBox>
                  <KeyAboutBook>Short</KeyAboutBook>
                  <ValueAboutBook>{subtitle}</ValueAboutBook>
                </BasicAboutBookBox>
                <BasicAboutBookBox>
                  <KeyAboutBook>Article</KeyAboutBook>
                  <ValueAboutBook>{isbn10}</ValueAboutBook>
                </BasicAboutBookBox>
              </>
            )}
            <MoreDetails type="button" onClick={handleDetalise}>
              More detailse
              <ChevronDownIcon style={{ position: "absolute", top: 4, right: -2 }} />
            </MoreDetails>
            <ButtonAddToCart type="submit">Add to cart</ButtonAddToCart>
            {pdf && (
              <TextPreviewBook href={Object.values(pdf)[0]} target="_blank">
                Preview book
              </TextPreviewBook>
            )}
          </InfoAboutBookBox>
        </PreviewBook>
      </BookInfoBox>
      <CheckMode mode={mode} setMode={setMode} />
      <DescriptionBox>
        <Description>
          {mode === "description" ? (
            desc
          ) : authors && mode === "authors" ? (
            authors
          ) : (
            <a href={url} target="_blanc">
              {title}
            </a>
          )}
        </Description>
      </DescriptionBox>
      <SubscribeForm />
      <SimilarBookBox>
        <SimilarTitle>Similar Books</SimilarTitle>
        <ArrowsBox>
          <ArrowLeftIcon />
          <ArrowRightIcon />
        </ArrowsBox>
      </SimilarBookBox>
    </BookPageContainer>
  );
};
