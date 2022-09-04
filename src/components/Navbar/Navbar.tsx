import React from "react";
import { NavItem, NavList, StyledHeader } from "./styles";
import { ReactComponent as Logo } from "../../assets/bookstore.svg";
import { ReactComponent as Favorites } from "../../assets/favorites-icon.svg";
import { ReactComponent as Cart } from "../../assets/cart-icon.svg";
import { ReactComponent as User } from "../../assets/user-icon.svg";
import { ReactComponent as Search } from "../../assets/search-icon.svg";
import { Input } from "../SearchInput/Input";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export const Navbar = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.HOME}>
        <Logo />
      </Link>

      <Input />
      <NavList>
        <NavItem>
          <Link to={ROUTE.FAVORITES}>
            <Favorites />
          </Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTE.CART}>
            <Cart />
          </Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTE.SIGN_IN}>
            <User />
          </Link>
        </NavItem>
      </NavList>
    </StyledHeader>
  );
};
