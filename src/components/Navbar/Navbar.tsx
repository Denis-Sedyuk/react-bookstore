import { NavItem, NavLinkIcon, NavList, StyledHeader } from "./styles";
import { Logo, FavoritesIcon, CartIcon, UserIcon, AccountIcon } from "assets";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { useForm } from "react-hook-form";
import { CHangeTheme, BurgerButton, BurgerMenu, SearchInput } from "components";
import { useWindowSize } from "hooks";
import { Breakpoint, Color } from "ui";
import { AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import { getUser, useAppSelector } from "store";

export type NavBarValues = {
  search: string;
};

export const Navbar = () => {
  const { isAuth } = useAppSelector(getUser);
  const { reset } = useForm<NavBarValues>();
  const [width] = useWindowSize();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(ROUTE.SEARCH);
    reset();
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <StyledHeader onSubmit={handleSearch}>
      <NavLinkIcon to={ROUTE.HOME}>
        <Logo />
      </NavLinkIcon>
      {width > Breakpoint.MD && <SearchInput />}
      {width > Breakpoint.MD ? (
        <NavList>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.FAVORITES}>
              <FavoritesIcon fill={Color.Light} />
            </Link>
          </NavItem>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.CART}>
              <CartIcon fill={Color.Light} />
            </Link>
          </NavItem>
          {!!!isAuth && (
            <NavItem whileHover={{ scale: 1.2 }}>
              <Link to={ROUTE.USER}>
                <UserIcon fill={Color.Light} />
              </Link>
            </NavItem>
          )}
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.ACCOUNT}>
              <AccountIcon stroke={Color.Light} />
            </Link>
          </NavItem>
          <NavItem>
            <CHangeTheme />
          </NavItem>
        </NavList>
      ) : (
        <NavList>
          {isAuth && (
            <NavItem whileHover={{ scale: 1.2 }}>
              <Link to={ROUTE.CART}>
                <CartIcon />
              </Link>
            </NavItem>
          )}

          <NavItem whileHover={{ scale: 1.2 }}>
            <BurgerButton type="button" onClick={handleOpenMenu} />
          </NavItem>
        </NavList>
      )}
      <AnimatePresence>
        {isOpen && <BurgerMenu handleCloseMenu={handleCloseMenu} />}
      </AnimatePresence>
    </StyledHeader>
  );
};
