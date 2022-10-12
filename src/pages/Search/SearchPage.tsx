import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store";
import { Breakpoint, Color } from "ui";
import { ROUTE } from "routes";
import { useWindowSize } from "hooks";
import {
  StyledSearchPage,
  StyledError,
  SearchBooks,
  Info,
  BooksSearchWrapper,
  Message,
  Pagination,
  ButtonArrow,
  PageList,
  PageItem,
  PageItemButton,
  MiddlePageList,
} from "./styles";
import { BookItem, Spinner, Title, Error } from "components";
import { getBooksSearch, fetchBooksBySearch } from "store";
import { ArrowRightPagination, ArrowleftPaginatiom } from "assets";

export const SearchPage = () => {
  const { booksBySearch, isLoading, error, debounceSearchValue, total } =
    useAppSelector(getBooksSearch);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPage = useParams().page || 1;
  const [width] = useWindowSize();
  const countPages = Math.ceil(+total / 10);

  const handlePrevPage = () => {
    currentPage && +currentPage !== 1 && navigate(`/${ROUTE.SEARCH}${+currentPage + -1}`);
  };

  const handleNextPage = () => {
    currentPage && +currentPage !== countPages && navigate(`/${ROUTE.SEARCH}${+currentPage + 1}`);
  };

  const handlePage = (event: any) => {
    event.target.textContent && navigate(`/${ROUTE.SEARCH}${+event.target.textContent}`);
  };

  useEffect(() => {
    currentPage && dispatch(fetchBooksBySearch({ query: debounceSearchValue, page: +currentPage }));
  }, [currentPage, debounceSearchValue, dispatch]);

  return (
    <StyledSearchPage>
      <SearchBooks>
        <Title>{`Search results: ${debounceSearchValue}`}</Title>

        {isLoading && <Spinner />}

        {error && (
          <StyledError>
            <Error>{error}</Error>
          </StyledError>
        )}

        {!isLoading && !error && (
          <>
            {<Info>Found {total} books</Info>}

            {booksBySearch.length !== 0 ? (
              <BooksSearchWrapper>
                {booksBySearch.map((book) => {
                  return <BookItem book={book} key={book.isbn13} />;
                })}
              </BooksSearchWrapper>
            ) : (
              <Message>No results of your search</Message>
            )}
          </>
        )}
      </SearchBooks>
      {countPages ? (
        <Pagination>
          <ButtonArrow
            onClick={handlePrevPage}
            disabled={currentPage && currentPage ? +currentPage === 1 : false}
          >
            <ArrowleftPaginatiom stroke={Color.Primary} /> Prev
          </ButtonArrow>

          {countPages > 3 && +currentPage <= 3 && width > Breakpoint.MD && (
            <PageList>
              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === 1}>
                  {+currentPage === 1 && "1"}
                  {+currentPage === 2 && +currentPage - 1}
                  {+currentPage === 3 && +currentPage - 2}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === 2}>
                  {+currentPage === 1 && +currentPage + 1}
                  {+currentPage === 2 && "2"}
                  {+currentPage === 3 && +currentPage - 1}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === 3}>
                  {+currentPage === 1 && +currentPage + 2}
                  {+currentPage === 2 && +currentPage + 1}
                  {+currentPage === 3 && "3"}
                </PageItemButton>
              </PageItem>
              {+currentPage !== 4 && (
                <PageItem>
                  <PageItemButton $isActive={false}>...</PageItemButton>
                </PageItem>
              )}

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  {countPages}
                </PageItemButton>
              </PageItem>
            </PageList>
          )}

          {+currentPage > 3 && +currentPage < countPages - 2 && width > Breakpoint.MD && (
            <PageList>
              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  1
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton $isActive={false}>...</PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={true}>
                  {+currentPage}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton $isActive={false}>...</PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  {countPages}
                </PageItemButton>
              </PageItem>
            </PageList>
          )}

          {countPages > 5 && +currentPage >= countPages - 2 && width > Breakpoint.MD && (
            <PageList>
              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  1
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton $isActive={false}>...</PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === countPages - 2}>
                  {+currentPage === countPages - 2 && `${countPages - 2}`}
                  {+currentPage === countPages - 1 && +currentPage - 1}
                  {+currentPage === countPages && +currentPage - 2}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === countPages - 1}>
                  {+currentPage === countPages - 2 && +currentPage + 1}
                  {+currentPage === countPages - 1 && `${countPages - 1}`}
                  {+currentPage === countPages && +currentPage - 1}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === countPages}>
                  {+currentPage === countPages - 2 && +currentPage + 2}
                  {+currentPage === countPages - 1 && +currentPage + 1}
                  {+currentPage === countPages && `${countPages}`}
                </PageItemButton>
              </PageItem>
            </PageList>
          )}

          {(width < Breakpoint.MD || countPages <= 3) && (
            <MiddlePageList>
              Page {currentPage} of {countPages ? countPages : 1}
            </MiddlePageList>
          )}

          <ButtonArrow
            onClick={handleNextPage}
            disabled={countPages ? +currentPage === countPages : false}
          >
            Next
            <ArrowRightPagination stroke={Color.Primary} />
          </ButtonArrow>
        </Pagination>
      ) : (
        ""
      )}
    </StyledSearchPage>
  );
};
