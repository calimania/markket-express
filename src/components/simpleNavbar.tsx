import React from 'react';

interface SimpleNavbarProps {
  storeName?: string;
  storeLogo?: string;
}

const SimpleNavbar: React.FC<SimpleNavbarProps> = ({ storeName = "Markkët Express", storeLogo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          {storeLogo && (
            <img
              src={storeLogo}
              alt={`${storeName} Logo`}
              height="40"
              className="me-2"
              style={{ objectFit: 'contain' }}
            />
          )}
          <span className="fw-bold fs-4">{storeName}</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="bi bi-house me-1"></i>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios">
                <i className="bi bi-briefcase me-1"></i>
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                <i className="bi bi-journal-text me-1"></i>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <i className="bi bi-info-circle me-1"></i>
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <i className="bi bi-envelope me-1"></i>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;