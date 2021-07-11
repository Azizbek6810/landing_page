import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CategoriesSec = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="categories">
      <ButtonDropdown
        className="categories_button"
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle caret>
          <MenuIcon className="menuIcon" />
          All categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Menu 1</DropdownItem>
          <DropdownItem>Menu 2</DropdownItem>
          <DropdownItem>Menu 3</DropdownItem>
          <DropdownItem id="responsiveIcon">
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
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <ul className="links">
        <li className="link_item">
          <a href="#" className="link active">
            Home
          </a>
        </li>
        <li className="link_item">
          <a href="#" className="link">
            New Arrivals
          </a>
        </li>
        <li className="link_item">
          <a href="#" className="link">
            Trending
          </a>
        </li>
        <li className="link_item">
          <a href="#" className="link">
            Deals for you
          </a>
        </li>
        <li className="link_item">
          <a href="#" className="link">
            Discount
          </a>
        </li>
        <li className="link_item">
          <a href="#" className="link">
            Weekly offers
          </a>
        </li>
        <li className="link_item">
          <a href="#" className="link">
            Become a ventor
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesSec;
