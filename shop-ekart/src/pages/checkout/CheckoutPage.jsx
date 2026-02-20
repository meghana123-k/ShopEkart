import axios from "axios";
import { useState, useEffect } from "react";
import "./checkoutPage.css";
import "./CheckoutHeader.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, getPaymentSummary] = useState(null);
  useEffect(() => {
    axios
      .get("api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("api/payment-summary").then((response) => {
      getPaymentSummary(response.data);
    });
  }, []);
  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          {<OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>}
          {<PaymentSummary paymentSummary={paymentSummary}/>}
        </div>
      </div>
    </>
  );
}
