import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <Link to="/">BOOKS</Link>
        <Link to="/categories" id="categories">
          CATEGORIES
        </Link>
      </ul>
    </nav>
  </header>
);

export default Header;
