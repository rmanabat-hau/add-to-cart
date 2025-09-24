import ProductItem from "./ProductItem";

const sampleProducts = [
  {
    name: "Laptop",
    description: "Foldable Computer",
    price: "999",
  },
  {
    name: "Headphones",
    description: "Music Listening Device",
    price: "199",
  },
  {
    name: "Phone",
    description: "Mini Computer",
    price: "499",
  },
  {
    name: "Speaker",
    description: "Music Giver",
    price: "99",
  },
  {
    name: "Airpods",
    description: "Music Giver",
    price: "99",
  },
];

const ProductsSection = () => {
  return (
    <div className="grid grid-cols-2">
      {sampleProducts.map((product) => {
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
