import "./style.css";
import React from "react";
import swal from "sweetalert";
import firebase from "firebase";
import History from "../History";
import { Button, Navbar, FormControl, Nav, Form } from "react-bootstrap";

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

  postAdd = () => {
    let uid = localStorage.getItem("uid");
    firebase
      .firestore()
      .collection("adds")
      .add({
        title: this.state.title,
        price: this.state.price,
        disc: this.state.disc,
        uid,
      })
      .then(function (docRef) {
        History.push("/Home");
        swal(
          "Your Add Is Live On Olx",
          "Hope Your Product Sell Soon",
          "success"
        );
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Olx</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

        <div className="width">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Titile</Form.Label>
            <Form.Control
              type="text"
              value={this.state.title}
              onChange={this.handleTitle}
              placeholder="Enter Product Title"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={this.state.price}
              onChange={this.handlePrice}
              placeholder="Product Price"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Discription</Form.Label>
            <Form.Control
              type="text"
              value={this.state.disc}
              onChange={this.handleDisc}
              placeholder="Product Discription"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Enable Chatting" />
          </Form.Group>
          <Button variant="primary" onClick={this.postAdd} type="submit">
            Post
          </Button>
        </div>
      </div>
    );
  }
}
