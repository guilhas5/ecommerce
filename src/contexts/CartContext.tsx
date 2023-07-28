import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { ProductType } from "./ProductContext";

type CartContextType = {
  addToCart: (product: ProductType, id: number) => void;
  removeFromCart: (id: number) => void;
  addQuantity: (id: number) => void;
  minusQuantity: (id: number) => void;
  cart: ProductType[];
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  itemAmount: number;
  totalPrice: string;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  removeFromCart: () => {},
  addQuantity: () => {},
  minusQuantity: () => {},
  cart: [],
  setCart: () => {},
  itemAmount: 0,
  totalPrice: "0",
});
const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<string>("0");

  const addToCart = (product: ProductType, id: number) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return id === item.id;
    });
    toast.success("Item add to the cart", {
      duration: 800,
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.error("Item removed", {
      duration: 800,
    });
    console.log(cart);
  };

  const addQuantity = (id: number) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].amount += 1;
      setCart(updatedCart);
    }
  };

  const minusQuantity = (id: number) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[index].amount > 1) {
        updatedCart[index].amount -= 1;
        setCart(updatedCart);
      }
    }
  };

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const finalPrice = cart
      .reduce((total, item) => total + item.price * item.amount, 0)
      .toFixed(2);
    setTotalPrice(finalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        addQuantity,
        minusQuantity,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
