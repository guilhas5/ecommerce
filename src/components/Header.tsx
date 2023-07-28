import { useContext,useEffect,useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"

const Header = () => {
  const [isActive,setIsActive] = useState<boolean>(false)
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white shadow-lg' : "bg-grey-500"} fixed w-full z-10 transition-all py-4`}>
      <div className="container mx-auto items-center flex justify-between h-full">
      <Link to={'/'}>
        <div>
          <img className="w-[40px]" src={Logo} alt="" />
        </div>
        </Link>
        
        <button className="flex relative" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-3xl" />
          <div className="bg-green-500/90 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center text-white font-semibold">
            {itemAmount}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
