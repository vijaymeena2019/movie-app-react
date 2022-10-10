import React from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  {/* <div className="container-fluid"> */}
    <Link className="navbar-brand" to="/">Vidly App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" aria-current="page" to="/movies">Movies</NavLink>
        <NavLink className="nav-item nav-link" to="/details/customers">Customers</NavLink>
        <NavLink className="nav-item nav-link" to="/rates/rentals">Rentals</NavLink>
        <Link className="nav-item nav-link" to="/login">Login</Link>
        <Link className="nav-item nav-link" to="/register">Register</Link>
      </div>
    </div>
  {/* </div> */}
</nav>
    // <ul>
    //   <li>
    //     {/* removied( to prevent addtional request to http server) anchor tag and href , and add Link component and replace href to 'to', bcoz we do not want to  render bundle.js every time in we click in link */}
    //     <Link to="/">Home</Link>  
    //   </li>
    //   <li>
    //     <Link to="/products">Products</Link>
    //   </li>
    //   <li>
    //     <Link to="/posts/2018/06">Posts</Link>
    //   </li>
    //   <li>
    //     <Link to="/admin">Admin</Link>
    //   </li>
    // </ul>
  );
};

export default NavBar;
