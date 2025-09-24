import { useState } from "react";
import CheckoutSection from "../components/AddToCart/CheckoutSection";
import ProductsSection from "../components/AddToCart/ProductsSection";

const AddToCart = () => {
  return (
    <div className="w-[100vw] h-full bg-gray-800 flex flex-col p-5">
      <ProductsSection />
      <CheckoutSection />
    </div>
  );
};

export default AddToCart;
