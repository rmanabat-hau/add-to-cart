import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import ProductItem from "./ProductItem";

const ProductsSection = () => {
  const {products, fetchAllProducts, loading } = useCartContext()


  useEffect(()=>{
    fetchAllProducts()
  }, [])

  if (loading) {
   return (
     <div className="flex items-center justify-center w-full h-32 font-bold text-xl">
        Loading...
      </div>
   )
  }
  return (
    <div className="grid grid-cols-2">
      {products?.map((product) => {
        return (
          <ProductItem
            name={product.name}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductsSection;
