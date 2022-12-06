import React from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  {/* <div className="container-fluid"> */}
    <Link className="navbar-brand" to="/">New App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" aria-current="page" to="/movies">Movies</Link>
        {
            user &&
            (<React.Fragment>
            <Link className="navbar-brand" to="/profile">{user.name}</Link>
            <Link className="navbar-brand" to="/logout">logout</Link>
            </React.Fragment>)
          }
          {
            !user &&
            (<React.Fragment>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/register">Register</Link>
            </React.Fragment>)
          }
        
        {/* // self
        {
          user ?
          <React.Fragment>
          <Link className="navbar-brand" to="/">{user.name}</Link>
          <Link className="navbar-brand" to="/">logout</Link>
          </React.Fragment>
          :
          <React.Fragment>
          <Link className="nav-item nav-link" to="/login">Login</Link>
          <Link className="nav-item nav-link" to="/register">Register</Link>
          <Link className="navbar-brand" to="/">Annonamous User</Link>
          </React.Fragment>
        } */}
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
