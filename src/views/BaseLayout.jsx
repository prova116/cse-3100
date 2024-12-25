import './BaseLayout.css';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header with Navbar */}
      <header className="navbar-container d-flex align-items-center bg-dark text-white p-4 shadow-lg">
        <h1 className="logo">
          <Link className="text-decoration-none text-white" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav className="navbar">
          <ul className="nav-list d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn-donate" to="/donate">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="content" className="container mt-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer bg-dark text-center text-white py-4 mt-5 shadow-lg">
        <div className="footer-info">
          <p className="mb-0">&copy; 2024 Purrfect Adoption. All Rights Reserved.</p>
          <small>Designed by Sumaiya Aftab</small>
        </div>
        
        <div className="footer-links mt-3">
          <Link className="footer-link" to="/about">About Us</Link> | 
          <Link className="footer-link" to="/contact">Contact</Link> | 
          <Link className="footer-link" to="/donate">Donate</Link>
        </div>

        <div className="social-links mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
