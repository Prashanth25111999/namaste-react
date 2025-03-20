import { useState, useEffect } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const handleLog = () => {
    setBtn(btn === "Login" ? "Logout" : "Login");
  };
  const useStatus = useOnlineStatus();

  return (
    <div className="bg-amber-50 flex justify-between h-19 border-1  fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex item center">
        <img className="w-29" alt="Food Logo" src={logo} />
      </div>
      <div className="flex items-center ">
        <ul className="flex items-center">
          <li className="mx-4">
            Network Status : {useStatus === true ? "Online✅" : "Offline❌"}
          </li>
          <li className="mx-4 font-semibold">
            <Link className="route-links" to="/">
              Home
            </Link>
          </li>
          <li className="mx-4 font-semibold">
            <Link className="route-links" to="/about">
              About Us
            </Link>
          </li>
          <li className="mx-4 font-semibold">
            <Link className="route-links" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="mx-4 font-semibold">Cart</li>
          <button
            className="mx-4 font-semibold border-1 rounded-md px-2.5 hover:cursor-pointer  bg-blue-200"
            onClick={handleLog}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
