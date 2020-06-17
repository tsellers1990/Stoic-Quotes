import React, { useEffect } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import M from  'materialize-css/dist/js/materialize.min.js';

const Navbar = (props) => {
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
}, []);
 
  return (
<>
  <nav>
    <div className="nav-wrapper">
    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down" id="menuList">
        {/* <li><Link to={"/Home"} id="linkTags">Home</Link></li> */}
        <li><Link to={"/Quotes"} id="linkTags">Quotes</Link></li>
        <li><Link to={"/NewQuote"} id="linkTags">New Quote</Link></li>
      </ul>
    </div>
      <a href={"/Home"}>
      </a>
    <div className="sideContainer">
    <ul id="slide-out" className="sidenav">
      {/* <li><Link to={"/Home"} id="sideLinks">Home</Link></li> */}
      <li><Link to={"/Quotes"} id="sideLinks">Quotes</Link></li>
      <li><Link to={"/NewQuote"} id="sideLinks">New Quote</Link></li>
    </ul>
  </div>
  </nav>
</>
    )
}

export default Navbar;