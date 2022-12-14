import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Favourites from "./Favourites/Favourites";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
