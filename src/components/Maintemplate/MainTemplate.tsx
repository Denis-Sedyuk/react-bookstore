import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
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
