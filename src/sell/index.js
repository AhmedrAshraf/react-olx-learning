import "./style.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";

export default class Home extends React.Component {
  state = {
    title: "",
    price: "",
    disc: "",
  };

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };
  handleDisc = (event) => {
    this.setState({ disc: event.target.value });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <div className="head">
            <h3>Sell Your Product</h3>
          </div>
        </AppBar>

        <div>
          <br />
          <input value={this.state.title} onChange={this.handleTitle} placeholder="Titile" />
          <br />
          <input value={this.state.price} onChange={this.handlePrice} placeholder="Price" />
          <br />
          <input value={this.state.disc} onChange={this.handleDisc} placeholder="Discription" />
          <br />
          <button>Post Add</button>
        </div>
      </div>
    );
  }
}
