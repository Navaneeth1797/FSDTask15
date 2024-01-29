// Importing necessary modules from React and react-router-dom
import React from "react";
import { Link } from "react-router-dom";
// Navbar component for navigation
function NavBar() {
  return (
    <>
      {/* Navigation bar with flex container and centering */}
      <div className="d-flex justify-content-center mt-4" id="navBar">
        {/* Bootstrap navbar with a list of navigation items */}
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav me-auto mx-auto text-center fw-bold mb-2 mb-lg-0">
            {/* Navigation item for displaying all articles */}
            <li className="nav-item mx-3">
              <Link
                to="/all"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                ALL
              </Link>
            </li>

            {/* Navigation item for displaying fullstack development articles */}
            <li className="nav-item mx-3">
              <Link
                to="/fullstack-development"
                className="nav-link active"
                href="#"
              >
                FULL STACK DEVELOPMENT
              </Link>
            </li>

            {/* Navigation item for displaying data science articles */}
            <li className="nav-item mx-3">
              <Link to="/data-science" className="nav-link active" href="#">
                DATA SCIENCE
              </Link>
            </li>

            {/* Navigation item for displaying cyber security articles */}
            <li className="nav-item mx-3">
              <Link to="/cyber-security" className="nav-link active" href="#">
                CYBER SECURITY
              </Link>
            </li>

            {/* Navigation item for displaying career-related articles */}
            <li className="nav-item mx-3">
              <Link
                to="/career"
                className="nav-link active"
                aria-disabled="true"
              >
                CAREER
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Horizontal line as a separator */}
      <hr />
    </>
  );
}

export default NavBar;
