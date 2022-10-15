import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Graduation from "./pages/Graduation";
import Newbaby from "./pages/Newbaby";
import Header from "./components/helpers/Header";
import Footer from "./components/helpers/Footer";
import Navbar from "./components/helpers/Navbar";
// import Receiverlogin from "./components/helpers/Receiverlogin";
// import Searchregistry from "./components/helpers/Searchregistry";
// import Retaillinks from "./components/helpers/Retaillinks";
// import Givemoney from "./components/helpers/Givemoney";
// import { Router } from '@material-ui/icons';

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/graduation" element={<Graduation />} />
            <Route path="/newbaby" element={<Newbaby />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    // </ApolloProvider> 
  );
}

export default App;
