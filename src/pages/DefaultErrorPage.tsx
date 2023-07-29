import { Link } from "react-router-dom";
function DefaultErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="border-4 p-20 flex flex-col shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-4">This page doesn't exist.</p>
      <p className="text-lg mb-4">We are sorry for the inconvenience.</p>
      <Link className="text-xl font-semibold text-blue-500" to="/">Home</Link>
      </div>
    </div>
  );
}

export default DefaultErrorPage;
