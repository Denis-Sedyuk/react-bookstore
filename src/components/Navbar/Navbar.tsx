import { Amount, AmountBox, NavItem, NavLinkIcon, NavList, StyledHeader } from "./styles";
import { Logo, FavoritesIcon, CartIcon, UserIcon, AccountIcon } from "../../assets/index";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CHangeTheme, BurgerButton, Input, BurgerMenu } from "../index";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Breakpoint } from "../../ui/breakpoints";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { getCart } from "../../store/selectors/cartSelectors";

export type NavBarValues = {
  search: string;
};

export const Navbar = () => {
  const { amount } = useAppSelector(getCart);
  const { handleSubmit, reset, control } = useForm<NavBarValues>();
  const [width] = useWindowSize();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onsubmit: SubmitHandler<NavBarValues> = (data) => {
    console.log(data);
    //  Тут нужно записать данные в редакс
    reset();
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <StyledHeader onSubmit={handleSubmit(onsubmit)}>
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
          <AmountBox>
            <NavItem whileHover={{ scale: 1.2 }}>
              <Link to={ROUTE.CART}>
                <CartIcon />
                <Amount>{amount}</Amount>
              </Link>
            </NavItem>
          </AmountBox>
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
