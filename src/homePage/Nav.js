import React from "react";
import navLogo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ResponsiveModal from "./ResponsiveModal";
const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <a href="#" className="nav-log">
          <img src={navLogo} alt="Navbar logo" />
        </a>
 
         <ResponsiveModal />
        <div className="searchSec">
          <form>
            <input
              placeholder="Search for Products, Brands & Categories"
              type="text"
              className="searchInput"
            />
            <button className="searchBtn" type="button">
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className="icons">
          <a href="#" className="bolimlar">
            <i className="far fa-heart"></i>
          </a>
          <a href="#" className="bolimlar">
            <i className="fas fa-users"></i>
          </a>
          <a href="#" className="bolimlar">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
