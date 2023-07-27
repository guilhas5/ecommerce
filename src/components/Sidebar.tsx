import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/Cartitem";
import { SidebarContext, SidebarContextType } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import ConfirmationModal from "../modal/ConfirmationModal"
import toast from "react-hot-toast";


type Props = {};

const Sidebar = (props: Props) => {
  const { isOpen, handleClose } =
    useContext<SidebarContextType>(SidebarContext);
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const { cart } = useContext(CartContext);
  const { setCart } = useContext(CartContext)

  const deleteCart = () => {
  const handleConfirm  = () => 
  toast.success("Cart cleared successfully!");
      setCart([]);
    ;

    const handleCancel = () => {
      toast.error("Cart deletion canceled!");
    };

    toast.custom(<ConfirmationModal onConfirm={handleConfirm} onCancel={handleCancel} />, {
      position: "top-center",
    });
  };


  useEffect(() => {
    const finalPrice = cart.reduce(
      (total, item) => total + item.price * item.amount,0
    ).toFixed(2);
    setTotalPrice(finalPrice);
  }, [cart]);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-5 border-b ">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div className="flex w-8 h-8 justify-center items-center ">
          <button onClick={handleClose}>
            <IoMdArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="py-2 flex justify-between  font-semibold ">
        <span>Total:</span>
        <div className="mr-4">{totalPrice}€</div>
      </div>

      <button onClick={deleteCart} className="py-4 bg-red-400 text-white w-8 h-8 flex justify-center items-center text-xl hover:bg-red-500">
        <FiTrash2  />
      </button>
    </div>
  );
};

export default Sidebar;
