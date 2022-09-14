import React from "react";
import { NavItem, NavList, StyledHeader } from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/bookstore.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/icons/favorites-icon.svg";
import { ReactComponent as CartIcon } from "../../assets/icons/cart-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user-icon.svg";
import { Input } from "../SearchInput/Input";
import { Link, NavLink } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useForm, SubmitHandler, Control } from "react-hook-form";

export type NavBarValues = {
  search: string;
};

export const Navbar = () => {
  const { register, handleSubmit, reset, control } = useForm<NavBarValues>();

  const onsubmit: SubmitHandler<NavBarValues> = (data) => {
    console.log(data);
    //  Тут нужно записать данные в редакс
  };
  reset();
  return (
    <StyledHeader onSubmit={handleSubmit(onsubmit)}>
      <NavLink to={ROUTE.HOME}>
        <Logo />
      </NavLink>
      <Input
        {...register("search")}
        placeholder="search"
        type="text"
        control={control}
        name="search"
      />
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
