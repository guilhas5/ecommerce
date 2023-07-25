import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { ProductType } from "../contexts/ProductContext";

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  const { id, image, category, title, price } = product;

  const formattedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  console.log(product);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt="image"
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 flex flex-col gap-y-2 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button>
              <div className="flex justify-center items-center text-white bg-blue-500 w-12 h-12">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product${id}`}
              className="w-12 h-12 flex justify-center items-center text-primary bg-white drop-shadow-xl "
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500">{category} </div>

        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
          <div className="font-semibold">{formattedPrice}€</div>
      </div>
    </div>
  );
};

export default Product;
