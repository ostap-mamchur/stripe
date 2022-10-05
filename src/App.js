import { loadStripe } from "@stripe/stripe-js";

const item = {
  price: "price_1LpdjIExTrNWgFKsaziuv8PM",
  quantity: 1,
};

const checkoutOptions = {
  lineItems: [item],
  mode: "payment",
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`,
};

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          const stripe = await loadStripe(
            "pk_live_51LpcRTExTrNWgFKsr2Ani1WHH9fmIPXfMadg3EMxHyYiSis6kXCrX2Yu8aVMcGnOE09rXXMfhI38lOJYhri0avrX00POZuKIEm"
          );

          const { error } = await stripe.redirectToCheckout(checkoutOptions);
          console.log("Stripe checkout error", error);
        }}
      >
        Stripe
      </button>
    </div>
  );
}

export default App;
