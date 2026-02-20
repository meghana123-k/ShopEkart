import dayjs from "dayjs";
import { Fragment } from "react";
export function OrdersDetailsGrid({ order }) {
  return (
    <div className="order-details-grid">
      {order.products &&
        order.products.map((orderProduct) => (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{orderProduct.product.name}</div>

              <div className="product-delivery-date">
                Arriving on:{" "}
                {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>

              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
            </div>
          </Fragment>
        ))}
    </div>
  );
}
