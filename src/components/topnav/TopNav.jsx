import React from 'react';

const TopNav = () => {
  return (
    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        {/* Brand */}
        <a className="navbar-brand" href="#">
         Performance  <span style={{fontWeight:"bold"}}>T</span>racker
        </a>
        
        {/* Right links */}
        <ul className="navbar-nav ms-auto d-flex flex-row">
       
          {/* Icon */}
          <li className="nav-item">
            <a className="nav-link me-3 me-lg-0" href="#">
              <i className="fas fa-fill-drip" />
            </a>
          </li>
          {/* Icon */}
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
      {/* Container wrapper */}
    </nav>
  )
}

export default TopNav;
