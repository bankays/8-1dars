import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <nav className="nav2">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/users">
            <li>Users</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
