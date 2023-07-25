import { useContext } from "react";
import { SidebarContextType, SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
type Props = {};

const Header = (props: Props) => {
  const { setIsOpen, isOpen } = useContext<SidebarContextType>(SidebarContext);
  console.log(isOpen);
  return (
    <div className="bg-gray-100">
      <div> Eliseu
      <button className="flex relative" onClick={() => setIsOpen(!isOpen)}><BsBag className="text-2xl" /></button>
    </div>
    </div>
  );
};

export default Header;
