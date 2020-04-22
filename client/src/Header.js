import React from "react"

const Header = () => {
    return (
      <header>
        <i className="fas fa-book fa-2x"></i>
        <h1>Book Lookup</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/Search">
              <li>Search</li>
            </a>
            <a href="/Saved">
              <li>Saved</li>
            </a>
          </li>
        </ul>
      </header>
    );
}

export default Header