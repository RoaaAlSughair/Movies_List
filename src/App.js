import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Favourites from "./Favourites/Favourites";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
