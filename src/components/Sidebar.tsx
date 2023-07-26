import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/Cartitem";
import { SidebarContext, SidebarContextType } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

type Props = {};

const Sidebar = (props: Props) => {
  const { isOpen, handleClose } =
    useContext<SidebarContextType>(SidebarContext);
  const { cart } = useContext(CartContext);
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
    </div>
  );
};

export default Sidebar;
