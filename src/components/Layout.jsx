import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderNavb from "./HeaderNavb";

const Layout = () => {
  return (
    <React.Fragment>
      <HeaderNavb  />
      <div className="minheight">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
