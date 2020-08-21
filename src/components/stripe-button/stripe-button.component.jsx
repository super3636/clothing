import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButtonCheckout = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIPRGHIJCjxwyB0PGx4F6T7m2x97uQWpFCnEiCYrOh5zHCaBNzqikSV8ppA8ggTeqILuPtSp1ZMfvTfopqwGmbV00DlZaxkhy";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      lebel="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButtonCheckout;
