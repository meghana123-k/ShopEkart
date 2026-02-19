export function totalQuantiy(cart) {
    let totalQuantity = 0;
    if(!cart) return totalQuantity;
    cart.map((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
    return totalQuantity;
}