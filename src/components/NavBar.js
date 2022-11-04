import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <>
    <nav>
      <h1 className="text-center mt-3">Book Store</h1>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link text-warning">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link text-warning">
            Categories
          </Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);
export default NavBar;
