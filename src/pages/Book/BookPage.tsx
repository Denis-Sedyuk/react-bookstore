import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "../../assets/index";
import { Title, BookItem, SubscribeForm, ButtonBackPage } from "../../components/index";
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
  ValueAboutBook,
  BasicAboutBookBox,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooksDetails } from "../../store/selectors/bookDetailsSelectors";
import { fetchBookDetails } from "../../store/feautures/bookDetailsSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBooks } from "../../store/selectors/bookSelectors";
import { fetchBooks } from "../../store/feautures/bookSlice";
import { Rating } from "react-simple-star-rating";
import { Color } from "../../ui/colors";

export const BookPage = () => {
  useNavigate();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);

  const { isbn13 } = useParams();

  const { isLoading, error, bookDetails } = useAppSelector(getBooksDetails);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookDetails(isbn13 as string));
  }, [dispatch, isbn13]);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <BookPageContainer>
      <TitleBox>
        <ButtonBackPage onCLick={handleBackPage} type="button" />
        <Title>{bookDetails.title}</Title>
      </TitleBox>
      <BookInfoBox>
        <BookPhotoBox>
          <Photo src={bookDetails.image} />
        </BookPhotoBox>
        <PreviewBook>
          <CostStarBox>
            <Price>{bookDetails.price === "$0.00" ? "Is free" : bookDetails.price}</Price>
            <Rating ratingValue={+bookDetails.rating * 20} size={25} fillColor={Color.Primary} />
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
            <MoreDetails type="button">
              More detailse
              <ChevronDownIcon style={{ position: "absolute", top: 4, right: -2 }} />
            </MoreDetails>
            <ButtonAddToCart type="submit">Add to cart</ButtonAddToCart>
            <TextPreviewBook href={`${bookDetails.url}`}>Preview book</TextPreviewBook>
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
      {/* <h2>{bookDetails.subtitle}</h2>
      <h2>{bookDetails.isbn10}</h2>
      <h2>{bookDetails.url}</h2>
      <h2>{bookDetails.pdf}</h2> */}
    </BookPageContainer>
  );
};
