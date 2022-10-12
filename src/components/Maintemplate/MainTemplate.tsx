import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "components";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
