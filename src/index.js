import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/Home/HomePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignupPage from '../src/landing_page/Signup/Signup';
import AboutPage from '../src/landing_page/About/About';
import ProductsPage from '../src/landing_page/Products/Products';
import PricingPage from '../src/landing_page/Pricing/PricingPage';
import SupportPage from '../src/landing_page/Support/SupportPage';
import NotFound from '../src/NotFound'
import Navbar from "./Navbar";
import Footer from "./Footer";
// import NotFound from "./NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route> 
      {/* browserRouter ek trike se container class hai jisme saare links ya routes hote hai 
      and Routes ke andr apn saare link or route define krte hai
      Route ke andr apn path and element define krte hai ki konse path pr konsa element render hona chaiye */}
      <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/products" element={<ProductsPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      {/* '*' for every route which does not get matched with above route like /signup,/about etc etc */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
