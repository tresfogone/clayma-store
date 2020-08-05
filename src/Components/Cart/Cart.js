import React,{useContext} from "react";
import NavBar from "../Navigation/NavBar";
import Footer from "../Navigation/Footer";
import HeroImage from "../Navigation/HeroImage";
import CartItems from "./CartItems";
import TopBanner from '../Navigation/TopBanner';
import SavedItems from './SavedItems';
import CartSummary from './CartSummary';
import {GlobalCartContext} from '../../context/CartContext';


export default function Cart() {
  const {cartTransaction}=useContext(GlobalCartContext);
  return (
    <div>

      <TopBanner/>
      <NavBar />
      <HeroImage />
      {/* <CartItems/> */}
      <div className="container-cart-items">
      <h1 className="text-center">Items in your cart <span className="cart-header-number-of-items"> {cartTransaction.length>0 ? cartTransaction.length+" items": ""}</span></h1>
     
      
      
      <div className="row">
        <div className="col-lg-8  ">
        <CartItems/>
        </div>
        <div className="col-lg-4 ">
          {
            cartTransaction.length>0 ? 
            <CartSummary  />
            :
            ""
          }
        
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8  ">
        <SavedItems/>
        </div>
      </div>
     
    </div>
      <Footer />
    </div>
  );
}
