import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Graduation from "./pages/Graduation";
import Newbaby from "./pages/Newbaby";
import Profile from "./pages/Profile";
import Header from "./components/helpers/Header";
import Footer from "./components/helpers/Footer";

// import Receiverlogin from "./components/helpers/Receiverlogin";
// import Searchregistry from "./components/helpers/Searchregistry";
// import Retaillinks from "./components/helpers/Retaillinks";
// import Givemoney from "./components/helpers/Givemoney";
// import { Router } from '@material-ui/icons';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/graduation" element={<Graduation />} />
            <Route path="/newbaby" element={<Newbaby />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
