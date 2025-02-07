import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Skills, Projects, Playlist, Contact } from "./pages";
import { Header, Footer } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
}

export default App;
