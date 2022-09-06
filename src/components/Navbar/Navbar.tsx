import React from "react";
import { NavItem, NavList, StyledHeader } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/bookstore.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/favorites-icon.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import { Input } from "../SearchInput/Input";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export const Navbar = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME} style={{ maxWidth: "148px" }}>
        <Logo />
      </Link>
      <Input />
      <NavList>
        <NavItem>
          <Link to={ROUTE.FAVORITES}>
            <FavoritesIcon />
          </Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTE.CART}>
            <CartIcon />
          </Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTE.SIGN_IN}>
            <UserIcon />
          </Link>
        </NavItem>
      </NavList>
    </StyledHeader>
  );
};
