import { useCartContext } from "../../context/CartContext";
const ProductItem = ({ name, description, price }) => {
  const {handleAddToCart} = useCartContext();

  const onAddToCartClick = () => {
    const product = {
      name,
      price: Number(price),
      description
    }
    handleAddToCart(product)
  }

  return (
    <div className="m-1 rounded border p-3 bg-gray-500 space-y-2 text-white">
      <div className="text-lg font-semibold flex justify-between">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <div>{description}</div>
      <div>
        <button
          onClick={onAddToCartClick}
          className="bg-blue-500 w-full font-bold"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
