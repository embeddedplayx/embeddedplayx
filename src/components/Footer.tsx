import React from 'react';
import Button from './common/Button';
import '../styles/components/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>PlayX</h3>
            <p>Your Ultimate Gaming Destination</p>
          </div>
          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/games">Games</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer__social">
            <h4>Follow Us</h4>
            <div className="footer__social-icons">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Discord</a>
            </div>
          </div>
          <div className="footer__newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and events</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <Button variant="primary" size="small">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 PlayX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;