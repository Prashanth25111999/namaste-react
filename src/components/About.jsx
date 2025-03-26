import React, { useContext } from "react";
import UserClass from "./UserClass";
import userContext from "../utils/userContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parenet Constructor Called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
    // this.timer = setInterval(() => {
    //   console.log("interval");
    // }, 1000);
  }
  componentWillUnmount() {
    console.log(" Parent componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent Render Called");

    return (
      <div className="pt-[70px] mt-3 mx-3">
        <userContext.Consumer>
          {(user) => <div className="text-red-600">{user.loggedInUser}</div>}
        </userContext.Consumer>
        <h1 className="font-bold text-3xl mb-3">About Us Page...!</h1>
        <UserClass name={"Prashanth H T ()"} location={"Banglore"} />
      </div>
    );
  }
}
export default About;
