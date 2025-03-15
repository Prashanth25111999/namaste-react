import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitData: {
        avatar_url: "Dummy Avtar",
        name: "Dummy Name",
        location: "Banglore",
        email: "Dummy Email",
      },
    };
    console.log(this.props.name + "Constructor Called");
  }
  async componentDidMount() {
    // console.log(this.props.name + " componentDidMount");

    const data = await fetch(" https://api.github.com/users/octocat");
    const json = await data.json();
    console.log(json);
    this.setState({
      gitData: json,
    });
  }

  render() {
    console.log(this.props.name + " Render Called");
    const { avatar_url, name, location, email } = this.state.gitData;

    return (
      <div className="user-compo">
        <img
          src={avatar_url}
          alt="Avtar"
          style={{ width: "200px", height: "200px" }}
        />
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h4>Contact - {email}</h4>
      </div>
    );
  }
}
export default UserClass;
