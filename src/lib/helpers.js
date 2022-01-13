// currency formatter
const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const formatPrice = (price) => formatter.format(price);

// cart totals by cart.items array
export const cartTotals = (cart) => {
  const cartTotalPriceArray = cart.items.map(
    (item) => item.price * item.quantity
  );
  const cartQuantity = cart.items.length;
  const cartTotalPriceSum =
    cartTotalPriceArray > 0 &&
    cartTotalPriceArray.reduce((prev, curr) => prev + curr);

  return { cartQuantity, cartTotalPriceSum };
};
