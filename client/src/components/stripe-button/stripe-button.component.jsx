import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeButtonCheckout = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIPRGHIJCjxwyB0PGx4F6T7m2x97uQWpFCnEiCYrOh5zHCaBNzqikSV8ppA8ggTeqILuPtSp1ZMfvTfopqwGmbV00DlZaxkhy";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error", JSON.parse(error));
        alert(
          "There was an issue with you payment, Please sure you use the provided credit cart"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
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
