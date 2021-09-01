import './navbar-styles.scss';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-primary navbar navbar-expand-md navbar-dark">
    <div className="container container-fluid">
      <Link to="/">
        <h4 className="nav-logo-text">DS Catalog</h4>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#dscatalog-navbar"
        aria-controls="dscatalog-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="dscatalog-navbar">
        <ul className="navbar-nav main-menu">
          <li>
            <NavLink to="/" activeClassName="active" exact >HOME</NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">CATÁLOGO</NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeClassName="active">ADMIN</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;