import React, {useState,createContext} from "react";

type Props = {
  children:React.ReactNode
}
export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
};

export const SidebarContext= createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
})
const SidebarProvider = ({children}:Props) => {
  const[isOpen,setIsOpen] = useState<boolean>(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <SidebarContext.Provider value={{isOpen,setIsOpen,handleClose}}>
      {children}
      </SidebarContext.Provider>
  )
}

export { SidebarProvider}