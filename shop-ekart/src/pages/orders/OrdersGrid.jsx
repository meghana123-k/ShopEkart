import { OrdersHeader } from "./OrdersHeader";
import { OrdersDetailsGrid } from "./OrderDetailsGrid";
export function OrdersGrid({ orders, loadCart }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => (
        <div key={order.id} className="order-container">
          <OrdersHeader order={order} />
          <OrdersDetailsGrid order={order} loadCart={loadCart} />
        </div>
      ))}
    </div>
  );
}
