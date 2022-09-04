import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/base";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Title } from "../Title/Title";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
