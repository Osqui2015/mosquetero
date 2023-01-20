import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderNavb from "./HeaderNavb";

const Layout = (addFav, favoriteQ) => {
  return (
    <React.Fragment>
      <HeaderNavb addFav={addFav} favoriteQ={favoriteQ} />
      <div className="minheight">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
