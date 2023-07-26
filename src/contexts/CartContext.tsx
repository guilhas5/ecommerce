import { createContext, useState, useEffect, useContext } from "react";
import { ProductContext, ProductType } from "./ProductContext";

type CartContextType = {
  addToCart: (product: ProductType, id: number) => void;
  cart: ProductType[];
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  cart:[]
  
});
const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const addToCart = (product: ProductType, id: number) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
       return id === item.id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount:cartItem.amount +1 }
        }else {
          return item;
        }
      })
      setCart(newCart)
    }else {
      setCart([...cart, newItem])

    }
  };
  console.log(cart)

  return (
    <CartContext.Provider value={{cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
