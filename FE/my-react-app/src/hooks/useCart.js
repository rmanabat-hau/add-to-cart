const VOUCHER = "10OFF";
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
];

const useCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [voucher, setVoucher] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchAllProducts = async () => {
    // TODO: fetch from BE
    setProducts(sampleProducts);
  };

  const fetchCart = async () => {
    // TODO: fetch from BE
    setCart([]);
  };

  const handleAddToCart = async (product) => {
    // TODO: save cart to BE
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleApplyVoucher = async (appliedVoucher) => {
    // TODO: check voucher if valid from BE
    if (appliedVoucher === VOUCHER) {
      const newTotal = totalAmount - totalAmount * 0.1;
      setTotalAmount(newTotal);
    }
  };

  const handleClearVoucher = async () => {
    setVoucher("");
    let totalAmount;

    products.forEach(
      (product =>
        totalAmount = totalAmount + product.price
      )
    );

    setTotalAmount(totalAmount);
  };

  const handleBuy = async () => {
    // TODO: call buy api
    setCart([]);
    setTotalAmount(0);
  };
};
