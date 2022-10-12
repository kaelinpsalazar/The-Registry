import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Graduation from "./pages/Graduation";
import Newbaby from "./pages/Newbaby";
import Header from "./components/helpers/Header";
import Footer from "./components/helpers/Footer";
import Givemoney from "./components/helpers/Givemoney";
import Receiverlogin from "./components/helpers/Receiverlogin";
import Retaillinks from "./components/helpers/Retaillinks";
import Searchregistry from "./components/helpers/Searchregistry";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Receiverlogin />} />
          <Route path="/" element={<Searchregistry />} />
          <Route path="/Wedding" element={<Wedding />} />
          <Route path="/Graduation" element={<Graduation />} />
          <Route path="/Newbaby" element={<Newbaby />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
