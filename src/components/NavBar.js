import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
  <>
    <nav className="bg-white">
      <div className="mb-5 d-flex container justify-content-start gap-5">
        <h1 className="text-center mt-3 mb-3 head-text text-center">Book Store</h1>
        <ul className="nav justify-content-center align-items-center mt-2 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link nav-text">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link nav-text">
              Categories
            </Link>
          </li>
        </ul>
        <div class="Oval mt-3 mb-3 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faUser} className="Oval2" /></div>
      </div>
     

    </nav>

    <Outlet />
  </>
);
export default NavBar;
