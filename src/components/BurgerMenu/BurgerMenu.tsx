import { useForm } from "react-hook-form";
import { Button, CHangeTheme, SearchInput } from "components";
import { CloseIcon } from "assets";
import { CloseButton, HeaderMenu, NavItem, NavList, StyledBurgerMenu, Title } from "./styles";
import { NavBarValues } from "components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { Color } from "ui";
import { FormEvent } from "react";
import { getUser, useAppSelector } from "store";

interface Iprops {
  handleCloseMenu: () => void;
}

export const BurgerMenu = ({ handleCloseMenu }: Iprops) => {
  const { isAuth } = useAppSelector(getUser);
  const navigate = useNavigate();
  const { reset } = useForm<NavBarValues>();

  const handleSearchPage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(ROUTE.SEARCH);
    reset();
  };

  return (
    <StyledBurgerMenu
      onSubmit={handleSearchPage}
      animate={{ x: 0 }}
      initial={{ x: 600 }}
      exit={{ x: 600 }}
    >
      <HeaderMenu>
        <NavItem>
          <CHangeTheme />
        </NavItem>
        <CloseButton type="button" whileHover={{ scale: 1.2 }} onClick={handleCloseMenu}>
          <CloseIcon stroke={Color.Primary} />
        </CloseButton>
      </HeaderMenu>
      <SearchInput />
      <NavList>
        <NavItem whileHover={{ scale: 1.2 }}>
          <Link to={ROUTE.FAVORITES}>
            <Title>Favorites</Title>
          </Link>
        </NavItem>
        <NavItem whileHover={{ scale: 1.2 }}>
          <Link to={ROUTE.CART}>
            <Title>Cart</Title>
          </Link>
        </NavItem>
      </NavList>
      {isAuth ? (
        <Link to={ROUTE.ACCOUNT}>
          <Button type="button">Account</Button>
        </Link>
      ) : (
        <Link to={ROUTE.USER}>
          <Button type="submit">Sign in</Button>
        </Link>
      )}
    </StyledBurgerMenu>
  );
};
