import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { ProductContext, ProductType } from "./ProductContext";

type CartContextType = {
  addToCart: (product: ProductType, id: number) => void;
  removeFromCart: (id: number) => void;
  addQuantity: (id: number) => void;
  minusQuantity: (id: number) => void;
  cart: ProductType[];
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  removeFromCart: () => {},
  addQuantity: () => {},
  minusQuantity:() => {},
  cart: [],
});
const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType, id: number) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return id === item.id;
    });
    toast.success("Item add to the cart", {
      duration:800
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item
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
      duration:800
    })
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
      if(updatedCart[index].amount > 1) {
      updatedCart[index].amount -= 1;
      setCart(updatedCart);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, addQuantity, minusQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
