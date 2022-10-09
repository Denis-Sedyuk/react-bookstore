import { StyledSlider } from "./styles";
import { fetchBooks, getBooks, useAppDispatch, useAppSelector } from "../../store";
import { BookItem, BookList } from "../index";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderSlick = () => {
  const { books } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        {books.map((book) => {
          return <BookItem book={book} key={book.isbn13} />;
        })}
      </Slider>
    </StyledSlider>
  );
};
