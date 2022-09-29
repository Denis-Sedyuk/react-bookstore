import { NavItem, NavLinkIcon, NavList, StyledHeader } from "./styles";
import { Logo, FavoritesIcon, CartIcon, UserIcon, AccountIcon } from "../../assets/index";
import { Input } from "../index";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CHangeTheme } from "../index";

export type NavBarValues = {
  search: string;
};

export const Navbar = () => {
  const { handleSubmit, reset, control } = useForm<NavBarValues>();

  const onsubmit: SubmitHandler<NavBarValues> = (data) => {
    console.log(data);
    //  Тут нужно записать данные в редакс
  };
  reset();
  return (
    <StyledHeader onSubmit={handleSubmit(onsubmit)}>
      <NavLinkIcon to={ROUTE.HOME}>
        <Logo />
      </NavLinkIcon>
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
          <Link to={ROUTE.USER}>
            <UserIcon />
          </Link>
        </NavItem>
        <NavItem>
          <Link to={ROUTE.ACCOUNT}>
            <AccountIcon />
          </Link>
        </NavItem>
        <NavItem>
          <CHangeTheme />
        </NavItem>
      </NavList>
    </StyledHeader>
  );
};
