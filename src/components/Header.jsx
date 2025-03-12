import { useState, useEffect } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const handleLog = () => {
    setBtn(btn === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="head-cont">
      <div className="logo-cont">
        <img className="logo" alt="Food Logo" src={logo} />
      </div>
      <div className="links-cont">
        <ul>
          <li>
            <Link className="route-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="route-links" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="route-links" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button className="log-btn" onClick={handleLog}>
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
