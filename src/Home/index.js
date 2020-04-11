import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static">
          <div className='head'>
            <h3>Home</h3>

            <Link to='/Sell'>
              <h3 className="but">sell</h3>
            </Link>

          </div>
        </AppBar>
      </div>
    );
  }
}
