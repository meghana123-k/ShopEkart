import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <section className="footer-brand">
          <img
            className="footer-logo"
            src="/images/logo-white1.png"
            alt="ShopEkart logo"
          />
          <p className="footer-tagline">
            Trusted shopping with fast delivery, secure checkout, and dedicated
            customer care.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">Secure Checkout</span>
            <span className="footer-badge">Fast Shipping</span>
            <span className="footer-badge">Easy Returns</span>
          </div>
        </section>

        <section className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">
            <img src="/images/home.png" alt="" aria-hidden="true" />
            Home
          </a>
          <a href="/checkout">
            <img src="/images/cart.png" alt="" aria-hidden="true" />
            Cart
          </a>
          <a href="/orders">
            <img src="/images/orders.png" alt="" aria-hidden="true" />
            Orders
          </a>
          <a href="/tracking/1/1">
            <img src="/images/tracking.png" alt="" aria-hidden="true" />
            Tracking
          </a>
        </section>

        <section className="footer-column">
          <h3>Support</h3>
          <a href="/help">Help Center</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </section>

        <section className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-row">
            <a href="#" aria-label="Follow us on Facebook">
              F
            </a>
            <a href="#" aria-label="Follow us on Instagram">
              I
            </a>
            <a href="#" aria-label="Follow us on Twitter">
              X
            </a>
            <a href="#" aria-label="Follow us on YouTube">
              Y
            </a>
          </div>
          <h3 className="payments-title">Payments</h3>
          <div className="payment-row">
            <span>VISA</span>
            <span>UPI</span>
            <span>COD</span>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ShopEkart. All rights reserved.</p>
      </div>
    </footer>
  );
}

