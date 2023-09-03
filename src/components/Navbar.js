import React from "react";
import './Navbar.scss';
import {NavLink} from "react-router-dom";
import IconButton from "./IconButton";

const Navbar = () => {

  //const handleSetThemeClick = () => setTheme(target.theme === 'default-theme' ? 'dark-theme': 'default-theme')

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/*<button onClick={handleSetThemeClick}>*/}
      {/*  <i className='ri-facebook-circle-fill'></i>*/}
      {/*</button>*/}
    </nav>
  );
}
export default Navbar;
