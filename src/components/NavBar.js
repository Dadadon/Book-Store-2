import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => (
  <>
    <nav className="bg-white">
      <div className="mb-5 d-flex container justify-content-start gap-5">
        <h1 className="text-center mt-3 mb-3 text-primary fw-bold">Book Store</h1>
        <ul className="nav nav-tabs justify-content-center align-items-center mt-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/categories" className="nav-link text-dark">
              Categories
            </Link>
          </li>
        </ul>
      </div>

    </nav>

    <Outlet />
  </>
);
export default NavBar;
