import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const Header = () => (
  <header>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <Link to="/">BOOKS</Link>
        <Link to="/categories" id="categories">
          CATEGORIES
        </Link>
      </ul>
    </nav>
    <img src={user} alt="user" id="userImage" />
  </header>
);

export default Header;
