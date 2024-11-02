import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Contacts from "./components/pages/contacts";
import About from "./components/pages/about";
import { MainContext } from "./utils/context";
import { useState } from "react";
function App() {
  const [lastCalledUsername, setLastCalledUsername] = useState(undefined);
  const getLastCalledUsername = (user) => {
    setLastCalledUsername(user);
  };
  return (
    <MainContext.Provider value={{ lastCalledUsername, getLastCalledUsername }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
