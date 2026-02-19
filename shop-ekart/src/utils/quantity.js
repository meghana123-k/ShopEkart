export function totalQuantiy(cart) {
    let totalQuantity = 0;

    cart.map((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
    return totalQuantity;
}