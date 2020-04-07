import React from "react";
import firebase from "firebase";


export default class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePsw = (event) => {
    this.setState({ password: event.target.value });
  };

  submit = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function (success) {
        console.log("Signup -> submit -> success", success);
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
        <h3>Signup</h3>

        <input
          value={this.state.name}
          onChange={this.handleName}
          placeholder="Full Name"
        />
        <br />
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
        <button onClick={this.submit}>Sign up</button>
      </div>
    );
  }
}
