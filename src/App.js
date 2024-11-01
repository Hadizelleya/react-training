import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Contacts from "./components/pages/contacts";
import About from "./components/pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
