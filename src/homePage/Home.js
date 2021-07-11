import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import iphoneIMG from "../images/iphones-removebg-preview.png";
const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="side1">
          <h3>GET THE NEW IPHONE 12 PRO</h3>
          <p>lorem ipsum dost IPHONE</p>
          <div className="buttons">
            <a href="#" className="button1">
              Buy Now
              <ShoppingBasketIcon />
            </a>
            <a href="#" className="button1">
              With $599 with trade-in
            </a>
          </div>
        </div>
        <div className="side2">
          <img src={iphoneIMG} alt="iphones image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
