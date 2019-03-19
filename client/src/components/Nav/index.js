import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav">
     <a className="nav-link active" href="/">Google Books</a>
     <a className="nav-link" href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;