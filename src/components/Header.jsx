import { logo } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
