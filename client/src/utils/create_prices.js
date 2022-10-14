const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const paymentIntent = await stripe.paymentIntents.create({
  amount: 500,
  currency: "usd",
  payment_method: "pm_card_visa",
});

stripe.products
  .create({
    name: "Registry Donation",
    description: "A specified $ amount to be gifted to the reciever.",
  })
  .then((product) => {
    stripe.prices
      .create({
        unit_amount: 1200,
        currency: "usd",
        recurring: {
          interval: "once",
        },
        product: product.id,
      })
      .then((price) => {
        console.log("Success! Here is your verification code: " + product.id);
        console.log("Success! Here is your donation amount: " + price.id);
      });
  });

//App function for Stripe
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// const successMessage = () => {
//   return <div className="success-msg">... ...</div>;
// };

// const cart = () => {
//   return <React.Fragment>... ...</React.Fragment>;
// };

// function Form() {
//   const [paymentCompleted, setPaymentCompleted] = useState(false);

//   return (
//     <div className="container">
//       <div className="py-5 text-center">
//         <h4>
//           Payment form-{" "}
//           <a
//             href="https://www.cluemediator.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             The Registry
//           </a>
//         </h4>
//       </div>

//       <div className="row s-box">
//         {paymentCompleted ? (
//           successMessage()
//         ) : (
//           <React.Fragment>
//             <div className="col-md-5 order-md-2 mb-4">{cart()}</div>
//             <div className="col-md-7 order-md-1">
//               <Elements stripe={stripePromise}>
//                 <CheckoutForm
//                   amount={2000}
//                   setPaymentCompleted={setPaymentCompleted}
//                 />
//               </Elements>
//             </div>
//           </React.Fragment>
//         )}
//       </div>
//     </div>
//   );
// }
