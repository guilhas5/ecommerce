import {useContext} from "react"
import {Link} from "react-router-dom"
import {IoMdArrowForward} from "react-icons/io"
import {FiTrash2} from "react-icons/fi"
import CartItem from "../components/Cartitem"
import {SidebarContext, SidebarContextType} from '../contexts/SidebarContext'

type Props = {}

const Sidebar = (props: Props) => {
  const {isOpen,setIsOpen, handleClose} = useContext<SidebarContextType>(SidebarContext)
  return (
    <div className="w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
    duration-300 z-20 px-4 lg:px-[35px]">
      Sidebar</div>
  )
}

export default Sidebar