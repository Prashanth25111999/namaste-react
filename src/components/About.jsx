import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parenet Constructor Called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
    this.timer = setInterval(() => {
      console.log("interval");
    }, 1000);
  }
  componentWillUnmount() {
    console.log(" Parent componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About Us Page...!</h1>
        <UserClass name={"Prashanth H T ()"} location={"Banglore"} />
      </div>
    );
  }
}
export default About;
