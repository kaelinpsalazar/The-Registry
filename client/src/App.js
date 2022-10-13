import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Graduation from "./pages/Graduation";
import Newbaby from "./pages/Newbaby";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Receiverlogin from "./components/helpers/Receiverlogin";
import Searchregistry from "./components/helpers/Searchregistry";
import Retaillinks from "./components/helpers/Retaillinks";
import Givemoney from "./components/helpers/Givemoney";
import { Router } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Receiverlogin />} />
          <Route path="/" element={<Searchregistry />} />
          <Route path="/pages" element={<Wedding />} />
          <Route path="/pages" element={<Graduation />} />
          <Route path="/pages" element={<Newbaby />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
