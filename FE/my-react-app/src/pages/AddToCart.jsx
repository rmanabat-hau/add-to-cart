import { useState } from "react";
import CheckoutSection from "../components/AddToCart/CheckoutSection";
import ProductsSection from "../components/AddToCart/ProductsSection";
import { CartProvider } from "../context/CartContext";

const AddToCart = () => {
  return (
    <CartProvider>
      <div className="w-[100vw] h-full bg-gray-800 flex flex-col p-5">
        <ProductsSection />
        <CheckoutSection />
      </div>
    </CartProvider>
  );
};

export default AddToCart;
