import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Competences from "./pages/Compétences";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Customerprojects from "./pages/Customerprojects";
import Allproject from "./pages/Allproject";
import Personalprojects from "./pages/Personalprojects";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allprojects" element={<Allproject />} />
        <Route path="/personalprojects" element={<Personalprojects />} />
        <Route path="/customerprojects" element={<Customerprojects />} />
      </Routes>
    </div>
  );
}

export default App;
