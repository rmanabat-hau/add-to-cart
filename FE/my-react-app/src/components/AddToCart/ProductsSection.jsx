import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import ProductItem from "./ProductItem";

const ProductsSection = () => {
  const {products, fetchAllProducts } = useCartContext()


  useEffect(()=>{
    fetchAllProducts()
  }, [])
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
