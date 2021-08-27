import './navbar-styles.scss';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => (
  <nav className="bg-primary navbar navbar-expand-md navbar-dark">
    <div className="container-fluid">
      <a href="link">
        <h4 className="nav-logo-text">DS Catalog</h4>
      </a>
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
            <a href="link">HOME</a>
          </li>
          <li>
            <a href="link">CATÁLOGO</a>
          </li>
          <li>
            <a href="link">ADMIN</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;