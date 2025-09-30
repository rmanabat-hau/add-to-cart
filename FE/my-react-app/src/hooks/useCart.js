import { useEffect, useState } from "react";
import { addToCart, checkoutCart, getAllProducts, getCart, validateVoucher } from "../api/cart";

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
  {
    name: "AirPods",
    description: "Music Giver",
    price: "99",
  },
];

export const useCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [voucher, setVoucher] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchAllProducts = async () => {
    setLoading(true)
    setError(false)
    try {
      const products = await getAllProducts() 
      setProducts(products)
    } catch (e) {
      // set sample products on error
      setError(true)
      setProducts(sampleProducts);
    } finally {
      setLoading(false)
    }
  };

  const fetchCart = async () => {
    setLoading(true)
    setError(false)
    try {
      const cart = await getCart()
      setCart(cart);
    } catch (e) {
      setError(true)
      // set empty cart on error
      setCart([])
    } finally {
      setLoading(false)
    }
  };

  const handleAddToCart = async (product) => {
    setLoading(true)
    setError(false)

    try {
      await addToCart(product)
      const newCart = [...cart, product];
      setCart(newCart);
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
    
  };

  const handleApplyVoucher = async () => {
    setLoading(true)
    setError(false)

    try {
      const voucher = await validateVoucher(voucher)
      if (voucher.isValid === true) {
        const newTotal = totalAmount - totalAmount * voucher.discount;
        setTotalAmount(newTotal);
      }
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  };

  const handleClearVoucher = async () => {
    setVoucher("");
    let totalAmount = 0;

    cart.forEach(
      (product =>
        totalAmount = totalAmount + product.price
      )
    );

    setTotalAmount(totalAmount);
  };

  const handleBuy = async () => {
    setLoading(true)
    setError(false)

    try {
      await checkoutCart()
      setCart([]);
      setTotalAmount(0);
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  };

  const handleComputeTotalAmount = () => {
    let totalAmount = 0;

    console.log(cart)

    cart.forEach(
      (product =>
        totalAmount = totalAmount + product.price
      )
    );

    setTotalAmount(totalAmount)
  }

  useEffect(() => {
handleComputeTotalAmount()
  }, [cart])

  return {
    products,
    cart,
    voucher,
    loading,
    error,
    totalAmount,

    setProducts,
    setCart,
    setVoucher,
    setLoading,
    setError,
    setTotalAmount,

    fetchAllProducts,
    fetchCart,
    handleAddToCart,
    handleApplyVoucher,
    handleBuy,
    handleClearVoucher
}
};
