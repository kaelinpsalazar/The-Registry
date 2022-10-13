import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Graduation from "./pages/Graduation";
import Newbaby from "./pages/Newbaby";
import Header from "./components/helpers/Header";
import Footer from "./components/helpers/Footer";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const successMessage = () => {
  return <div className="success-msg">... ...</div>;
};

const cart = () => {
  return <React.Fragment>... ...</React.Fragment>;
};

function App() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h4>
          Payment form-{" "}
          <a
            href="https://www.cluemediator.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Registry
          </a>
        </h4>
      </div>

      <div className="row s-box">
        {paymentCompleted ? (
          successMessage()
        ) : (
          <React.Fragment>
            <div className="col-md-5 order-md-2 mb-4">{cart()}</div>
            <div className="col-md-7 order-md-1">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  amount={2000}
                  setPaymentCompleted={setPaymentCompleted}
                />
              </Elements>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

// import Receiverlogin from "./components/helpers/Receiverlogin";
// import Searchregistry from "./components/helpers/Searchregistry";
// import Retaillinks from "./components/helpers/Retaillinks";
// import Givemoney from "./components/helpers/Givemoney";
// import { Router } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/" element={<Receiverlogin />} />
          <Route path="/" element={<Searchregistry />} /> */}
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/graduation" element={<Graduation />} />
          <Route path="/newbaby" element={<Newbaby />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
