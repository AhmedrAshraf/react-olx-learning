import React from "react";
import firebase from "firebase";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePsw = (event) => {
    this.setState({ password: event.target.value });
  };

  submit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function (success) {
        localStorage.setItem("uid", success.user.uid);
        this.props.History.push("/home");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  // arrow function does't have is own (this)
  // normall function have is own (this)

  render() {
    return (
      <div>
        <h3>Login</h3>

        <input
          value={this.state.email}
          onChange={this.handleEmail}
          placeholder="email"
        />
        <br />
        <input
          value={this.state.password}
          onChange={this.handlePsw}
          placeholder="password"
        />
        <br />
        <button onClick={this.submit}>Login</button>
      </div>
    );
  }
}
