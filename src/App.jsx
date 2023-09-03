import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Store from "./pages/Store";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import SingleGame from "./pages/SingleGame";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <div className="">
        <AnimatePresence>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:id" element={<SingleGame />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
