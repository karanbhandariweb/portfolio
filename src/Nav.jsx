import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav=() =>
{
    return(<>
        <div className="container-fluid">
        <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">   
  <div className="navbar-brand">My Portfolio</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">|||</span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink activeClassName="active" exact className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" exact className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" exact className="nav-link" to="/work">My Work</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" exact className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
   
  </div></div>
</nav></div></div></div>
    </>)
}
export default Nav;