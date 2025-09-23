const ProductItem = ({ name, description, price }) => {
  const handleAddToCart = () => {
    console.log("Added To Cart: ", name);
  };

  return (
    <div className="m-1 rounded border p-3 bg-gray-500 space-y-2 text-white">
      <div className="text-lg font-semibold flex justify-between">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <div>{description}</div>
      <div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 w-full font-bold"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
