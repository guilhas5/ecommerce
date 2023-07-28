import { useContext } from "react";
import { SidebarContextType, SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import {Logo} from "../assets/"
type Props = {};

const Header = (props: Props) => {
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  console.log(isOpen);
  return (
    <header className="bg-gray-100">
      <Link to={'/'}>
        <div>
        <img src={Logo} alt="" />
        </div>
        </Link>
        Eliseu
        <button className="flex relative max-w-[50px]" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-2xl" />
          <div className="bg-blue-500/90 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center text-white font-semibold">
            {itemAmount}
          </div>
        </button>
    </header>
  );
};

export default Header;
