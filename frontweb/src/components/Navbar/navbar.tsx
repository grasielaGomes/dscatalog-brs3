import './navbar-styles.scss';

const Navbar = () => (
  <nav className="bg-primary navbar navbar-expand-md">
    <div className="container-fluid">
      <a href="link">
        <h4 className="nav-logo-text">DS Catalog</h4>
      </a>
      <div className="collapse navbar-collapse">
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