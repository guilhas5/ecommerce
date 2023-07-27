import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useContext } from "react";
import { ProductType } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
type Props = {
  item: ProductType;
};

const CartItem = ({ item }: Props) => {
  const { removeFromCart, addQuantity, minusQuantity } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg: px-6 border-b w-full font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 text-gray-500">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="item image" />
        </Link>
        <div className="w-full flex flex-col ">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-lg cursor-pointer">
              <IoMdClose
                onClick={() => removeFromCart(id)}
                className="text-gray-500 hover:text-red-500 transition duration-200"
              />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Quantity */}
            <div
              className="flex flex-1 max-w-[100px] items-center h-full border
           text-primary font-medium"
            >
              <div className="flex flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdRemove onClick={() => minusQuantity(id)} />
              </div>
              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className=" flex flex-1 h-full justify-center items-center cursor-pointer">
                <IoMdAdd onClick={() => addQuantity(id)} />
              </div>
            </div>
            {/* Item price */}
            <div className="flex flex-1 justify-around items-center">
              {price}€
            </div>
            <div className="flex flex-1 justify-end items-center text-primary font-medium">
              {`${price * amount}`}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
