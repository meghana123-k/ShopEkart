import { totalQuantiy } from "../../utils/quantity";
import "./CheckoutHeader.css";
import { Link } from "react-router";
export function CheckoutHeader({cart}) {
  return (
    <>
      <link rel="icon" href="/images/cart.png" />
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo1.png" />
              <img className="mobile-logo" src="images/mobile-logo1.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {totalQuantiy(cart)} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}
