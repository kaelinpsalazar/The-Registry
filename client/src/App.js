import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Wedding from "./pages/wedding";
import Graduation from "./pages/graduation";
import Newbaby from "./pages/newbaby";
import Header from "./components/helpers/header";
import Footer from "./components/helpers/footer";
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
