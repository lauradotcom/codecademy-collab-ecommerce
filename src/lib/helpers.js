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

// form validation!
export const handleValidation = (state) => {
  console.log(state);
  const inputs = state;
  let errors = {};
  let formIsValid = true;

  //Email
  if (!inputs["contactInfo"]) {
    formIsValid = false;
    errors["email"] = "Cannot be empty";
  }

  //First Name
  if (!inputs["firstName"]) {
    formIsValid = false;
    errors["firstName"] = "Cannot be empty";
  }

  //Last Name
  if (!inputs["firstName"]) {
    formIsValid = false;
    errors["firstName"] = "Cannot be empty";
  }

  //address
  if (
    !inputs["address"] ||
    !inputs["city"] ||
    !inputs["country"] ||
    !inputs["state"] ||
    !inputs["zipCode"]
  ) {
    formIsValid = false;
    errors["address"] = "Missing address information";
  }

  return {
    valid: formIsValid,
    errors: errors,
  };
};
