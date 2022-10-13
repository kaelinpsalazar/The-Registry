import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Graduation from "./pages/Graduation";
import Newbaby from "./pages/Newbaby";
import Header from "./components/helpers/Header";
import Footer from "./components/helpers/Footer";
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
