import { FiInstagram,FiFacebook,FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-400 py-12">
      <div className="container mx-auto">
        <div className="flex justify-center gap-x-5 mb-2 text-lg cursor-pointer">
        <FiInstagram  />
        <FiFacebook />
        <FiTwitter />
        </div>
        <p className="text-center font-semibold">Copyright &copy; Ecommerce Shop data. All rights reserved {currentYear}</p>
      </div>
      </footer>
  )
}

export default Footer
