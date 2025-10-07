import React from 'react';

interface SimpleFooterProps {
  store?: any;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({ store = {} }) => {
  const currentYear = new Date().getFullYear();

  // Extract store information with fallbacks
  const storeName = store?.title || "Markkët Express";
  const storeDescription = store?.Description || "Tu tienda online de confianza";
  const storeSettings = store?.settings || {};
  const storeMeta = storeSettings?.meta || {};
  const storeContact = { email: store?.settings?.support_email };
  const storeSocial = storeMeta?.social || {};

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Store Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">{storeName}</h5>
            <p className="text-light opacity-75">{storeDescription}</p>
            <div className="d-flex gap-3">
              {/* {storeSocial?.facebook && (
                <a href={storeSocial.facebook} className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
              )}
              {storeSocial?.instagram && (
                <a href={storeSocial.instagram} className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              )}
              {storeSocial?.twitter && (
                <a href={storeSocial.twitter} className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
              )} */}
              {/* Fallback social links if no store social data */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3 text-white">Enlaces</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none opacity-75 hover-opacity-100">Inicio</a></li>
              <li><a href="/servicios" className="text-light text-decoration-none opacity-75 hover-opacity-100">Servicios</a></li>
              <li><a href="/blog" className="text-light text-decoration-none opacity-75 hover-opacity-100">Blog</a></li>
              <li><a href="/about" className="text-light text-decoration-none opacity-75 hover-opacity-100">Acerca de</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3 text-white">Soporte</h6>
            <ul className="list-unstyled">
              <li><a href="/contacto" className="text-light text-decoration-none opacity-75 hover-opacity-100">Contacto</a></li>
              <li><a href="/help" className="text-light text-decoration-none opacity-75 hover-opacity-100">Ayuda</a></li>
              <li><a href="/terms" className="text-light text-decoration-none opacity-75 hover-opacity-100">Términos</a></li>
              <li><a href="/privacy" className="text-light text-decoration-none opacity-75 hover-opacity-100">Privacidad</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3 text-white">Contacto</h6>
            <div className="text-light opacity-75">
              <div className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                {storeContact?.email || "info@markketexpress.com"}
              </div>
              <div className="mb-2">
                <i className="bi bi-phone me-2"></i>
                {storeContact?.phone || "+1 (555) 123-4567"}
              </div>
              <div>
                <i className="bi bi-geo-alt me-2"></i>
                {storeContact?.address || "Ciudad, País"}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-light opacity-75 mb-0">
              © {currentYear} {storeName}. Todos los derechos reservados.
              <span className="ms-2">
                Desarrollado con <i className="bi bi-heart-fill text-danger"></i> usando Astro
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;