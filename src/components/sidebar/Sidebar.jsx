import React from "react";
import TopNav from "../topnav/TopNav";
import { sidebarElements } from "./sidebarElements";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div>
        {/*Main Navigation*/}
        <header>
          {/* Sidebar */}
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                {sidebarElements.map((item) => {
                  return (
                    <NavLink
                      to={item.path}
                      className="list-group-item list-group-item-action py-2 ripple"
                      aria-current="true"
                    >
                      {item.icon}
                      {item.name}
                    </NavLink>
                  );
                })}
                {/* <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3" /><span>Main dashboard</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
            <i className="fas fa-chart-area fa-fw me-3" /><span>Webiste traffic</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3" /><span>Password</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span>Analytics</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-chart-pie fa-fw me-3" /><span>SEO</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Orders</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3" /><span>International</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3" /><span>Partners</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3" /><span>Calendar</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span>Users</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span>Sales</span></a> */}
              </div>
            </div>
          </nav>
          {/* Sidebar */}
          {/* Navbar */}
          <TopNav />
          {/* Navbar */}
        </header>
        {/*Main Navigation*/}
      </div>
    </div>
  );
};

export default Sidebar;
