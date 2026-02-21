import "./header.css";
import { totalQuantiy } from "../utils/quantity";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";

type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
};
export function Header({ cart }: HeaderProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchText = searchParams.get("search");
  const [inputText, setInputText] = useState(searchText || "");
  const searchInput = (event) => {
    setInputText(event.target.value);
  };

  const searchButton = () => {
    if (!inputText.trim()) return;
    navigate(`/?search=${inputText}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchButton();
    }
  };
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="/images/logo-white1.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={inputText}
          onChange={searchInput}
          onKeyDown={handleKeyDown}
        />

        <button className="search-button">
          <img
            className="search-icon"
            src="images/icons/search-icon.png"
            onClick={searchButton}
          />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantiy(cart)}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
