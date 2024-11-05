import '../styles/Footer.scss'; 
export default function Footer() {
    return (
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Learn more about our company and the services we offer. We aim to
            provide the best user experience.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media-links">
            <a href="https://facebook.com" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Easy Portfolio. All rights reserved.</p>
      </div>
    </footer>
    );
  }
  