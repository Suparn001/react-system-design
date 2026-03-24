import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className="header-nav">
        <Link to="/" className="header-logo">My App</Link>
        <ul className="header-links">
          <li className="header-item">
            <Link to="/user-list">List User</Link>
          </li>
          <li className="header-item">
            <Link to="/user-update">Edit User</Link>
          </li>
          <li className="header-item">
            <Link to="/user-delete">Delete User</Link>
          </li>
          <li className="header-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="header-item">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;