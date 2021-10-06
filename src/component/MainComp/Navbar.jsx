import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = (props) => {
  const location = useLocation();
  
  return (
    <Fragment>
    <div className="position-fixed top-0 w-100" style={{ zIndex:'1' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow" >
        <div className="container p-3 ps-4" id="padding" style={{ transition:'0.3s' }}>
          <Link className="navbar-brand" to="/">
            Nonton.id
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className={`nav-link ${location.pathname === '/' ? ` active` : ``}`} to="/">
                Home
              </Link>
              <Link className={`nav-link ${location.pathname === '/playlist' ? ` active` : ``}`} to="/playlist">Playlist</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </Fragment>
  );
};

export default Navbar;