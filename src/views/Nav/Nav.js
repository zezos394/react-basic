import React, { Component } from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          To Do App
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          Users
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
    );
  }
}
export default Nav;
