import { NavItem, NavLinkIcon, NavList, StyledHeader } from "./styles";
import { Logo, FavoritesIcon, CartIcon, UserIcon, AccountIcon } from "../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CHangeTheme, BurgerButton, Input, BurgerMenu } from "../index";
import { useWindowSize } from "../../hooks/index";
import { Breakpoint } from "../../ui/index";
import { AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import { useAppSelector, getCart } from "../../store/index";

export type NavBarValues = {
  search: string;
};

export const Navbar = () => {
  const { cartBooks } = useAppSelector(getCart);
  const { handleSubmit, reset, control } = useForm<NavBarValues>();
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
      {width > Breakpoint.MD && (
        <Controller
          name="search"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                name={"search"}
                placeholder="Search"
                value={value}
                onChange={onChange}
                type="text"
              />
            );
          }}
        />
      )}
      {width > Breakpoint.MD ? (
        <NavList>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.FAVORITES}>
              <FavoritesIcon />
            </Link>
          </NavItem>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.CART}>
              <CartIcon />
            </Link>
          </NavItem>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.USER}>
              <UserIcon />
            </Link>
          </NavItem>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.ACCOUNT}>
              <AccountIcon />
            </Link>
          </NavItem>
          <NavItem>
            <CHangeTheme />
          </NavItem>
        </NavList>
      ) : (
        <NavList>
          <NavItem whileHover={{ scale: 1.2 }}>
            <Link to={ROUTE.CART}>
              <CartIcon />
            </Link>
          </NavItem>
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
