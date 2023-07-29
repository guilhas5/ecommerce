import { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/Cartitem";
import { SidebarContext, SidebarContextType } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import ConfirmationModal from "../modal/ConfirmationModal";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } =
    useContext<SidebarContextType>(SidebarContext);
  const { cart, setCart, totalPrice,itemAmount } = useContext(CartContext);

  const deleteCart = () => {
    const handleConfirm = () => {
      setCart([]);
      toast.dismiss();
    };

    const handleCancel = () => {
      toast.dismiss();
    };

    toast.custom(
      <ConfirmationModal onConfirm={handleConfirm} onCancel={handleCancel} />,
      {
        position: "top-center",
        duration: 20000,
      }
    );
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-5 border-b ">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div className="flex w-8 h-8 justify-center items-center ">
          <button onClick={handleClose}>
            <IoMdArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b h-[520px] 
      lg:h-[620px]"
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="py-2 flex w-full justify-between items-center ">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> {totalPrice}€
          </div>
          <button
            onClick={deleteCart}
            className="py-4 bg-red-400 text-white w-8 h-8 flex justify-center items-center text-xl hover:bg-red-500"
          >
            <FiTrash2 />
          </button>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex justify-center items-center p-4 w-full text-primary font-medium"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex justify-center items-center p-4 text-white font-medium"
        >
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
