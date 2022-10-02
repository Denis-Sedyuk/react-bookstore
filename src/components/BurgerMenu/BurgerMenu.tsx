import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, CHangeTheme, Input } from "../index";
import { CloseIcon } from "../../assets/index";
import { CloseButton, HeaderMenu, NavItem, NavList, StyledBurgerMenu, Title } from "./styles";
import { NavBarValues } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { Color } from "../../ui/colors";

interface Iprops {
  handleCloseMenu: () => void;
}

export const BurgerMenu = ({ handleCloseMenu }: Iprops) => {
  const { handleSubmit, reset, control } = useForm<NavBarValues>();

  const onsubmit: SubmitHandler<NavBarValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledBurgerMenu
      onSubmit={handleSubmit(onsubmit)}
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
        <NavItem whileHover={{ scale: 1.2 }}>
          <Link to={ROUTE.ACCOUNT}>
            <Title>Profile</Title>
          </Link>
        </NavItem>
      </NavList>

      <Button type="submit">Sign in</Button>
    </StyledBurgerMenu>
  );
};
