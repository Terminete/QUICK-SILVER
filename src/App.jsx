// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
//PAGES

import Login from "./pages/login";
import Cart from "./Context/Cart";
import Register from "./pages/Register";
import Home from "./pages/home";
import Order from "./pages/Order";
import Track from "./pages/Track";
import Feedback from "./pages/feedback";
import Checkout from "./Context/Checkout";

function App() {
  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/track" element={<Track />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
