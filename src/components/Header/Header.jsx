import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    // console.log("button clicked");
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        {user ? (
          <span className="welcome-text">
            {" "}
            Welcome, {user.email}{" "}
            <button onClick={handleLogOut}>Sign Out</button>
          </span>
        ) : (
          <span>
            {" "}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
