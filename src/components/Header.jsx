import { useState } from "react";
import { logo } from "../utils/constants";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
