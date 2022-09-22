import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "../../assets/index";
import { Title, BookItem, SubscribeForm } from "../../components/index";
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
  DescriptionList,
  DescriptionItem,
  DescriptionBox,
  Description,
  ButtonAddToCart,
  Photo,
  BookPhotoBox,
  CostStarBox,
  Rating,
  ValueAboutBook,
  BasicAboutBookBox,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooksDetails } from "../../store/selectors/bookDetailsSelectors";
import { fetchBookDetails } from "../../store/feautures/bookDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../store/selectors/bookSelectors";
import { fetchBooks } from "../../store/feautures/bookSlice";

export const BookPage = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { isbn13 } = useParams();

  const { isLoading, error, bookDetails } = useAppSelector(getBooksDetails);

  useEffect(() => {
    dispatch(fetchBookDetails(isbn13!));
  }, [dispatch, isbn13]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <BookPageContainer>
      <h2>{bookDetails.subtitle}</h2>
      <h2>{bookDetails.isbn10}</h2>
      <h2>{bookDetails.url}</h2>
      {/* <h2>{bookDetails.pdf}</h2> */}
      <TitleBox>
        <ArrowBackIcon />
        <Title>{bookDetails.title}</Title>
      </TitleBox>
      <BookInfoBox>
        <BookPhotoBox>
          <Photo src={bookDetails.image} />
        </BookPhotoBox>
        <PreviewBook>
          <CostStarBox>
            <Price>{bookDetails.price === "$0.00" ? "Is free" : bookDetails.price}</Price>
            <Rating>{bookDetails.rating}</Rating>
          </CostStarBox>
          <InfoAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Authors</KeyAboutBook>
              <ValueAboutBook>{bookDetails.authors}</ValueAboutBook>
            </BasicAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Publisher</KeyAboutBook>
              <ValueAboutBook>{bookDetails.publisher}</ValueAboutBook>
            </BasicAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Year</KeyAboutBook>
              <ValueAboutBook>{bookDetails.year}</ValueAboutBook>
            </BasicAboutBookBox>
            <BasicAboutBookBox>
              <KeyAboutBook>Pages</KeyAboutBook>
              <ValueAboutBook>{bookDetails.pages}</ValueAboutBook>
            </BasicAboutBookBox>
            <MoreDetails href="#">
              More detailse
              <ChevronDownIcon style={{ position: "absolute", top: 3, right: -2 }} />
            </MoreDetails>
            <ButtonAddToCart type="submit">Add to cart</ButtonAddToCart>
            <TextPreviewBook href={`${bookDetails.pdf}`}>Preview book</TextPreviewBook>
          </InfoAboutBookBox>
        </PreviewBook>
      </BookInfoBox>
      <DescriptionList>
        <DescriptionItem>Description</DescriptionItem>
        <DescriptionItem>Authors</DescriptionItem>
      </DescriptionList>
      <DescriptionBox>
        <Description>{bookDetails.desc}</Description>
        <Description>{bookDetails.authors}</Description>
      </DescriptionBox>
      <SubscribeForm />
      <SimilarBookBox>
        <SimilarTitle>Similar Books</SimilarTitle>
        <ArrowsBox>
          <ArrowLeftIcon />
          <ArrowRightIcon />
        </ArrowsBox>
        {books.map((book) => {
          return <BookItem book={book} {...book} key={book.isbn13} />;
        })}
      </SimilarBookBox>
    </BookPageContainer>
  );
};
