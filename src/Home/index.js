import "./style.css";
import db from "../fire";
import React from "react";
import History from "../History";
import { Button, Navbar, FormControl, Nav, Form } from "react-bootstrap";

export default class Home extends React.Component {
  state = {
    adds: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    let array = [];
    db.collection("adds")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(change => {
          array.push(change.doc.data());
        });
        this.setState({ adds: array });
      });

  };

  logout() {
    localStorage.removeItem("uid");
    History.push("/Login");
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Olx</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/myAdds">My Adds</Nav.Link>
            <Nav.Link href="/Sell">sell</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Button variant="outline-light" onClick={this.logout}>
            Logout
          </Button>
        </Navbar>

        <div className="postsView">
          {this.state.adds.map((item, index) => {
            return (
              <div className="addscontainer">
                <img src={item.url} width="200px" />
                <h5>Title: {item.title}</h5>
                <p>Rs. {item.price}</p>
                <p style={{ overflow: "hidden", height: "25px" }}>
                  Detail: {item.disc}
                </p>
                <Button color="info">info</Button>{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
