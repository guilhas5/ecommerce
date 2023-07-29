import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Button } from "flowbite-react";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const products = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filterCategories = products.filter((product) => {
    return selectedCategory === "" || product.category === selectedCategory;
  });

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <Hero />
      <section id="home" className="py-20">
        <div className="container mx-auto">
          <div className=" flex flex-wrap justify-center gap-3 md:gap-5">
            <Button
              onClick={() => handleCategory("")}
              gradientDuoTone="cyanToBlue"
              outline
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("women's clothing")}
              gradientDuoTone="cyanToBlue"
              outline
            >
              Women's
            </Button>
            <Button
              onClick={() => handleCategory("men's clothing")}
              gradientDuoTone="cyanToBlue"
              outline
            >
              Mens
            </Button>
            <Button
              onClick={() => handleCategory("jewelery")}
              gradientDuoTone="cyanToBlue"
              outline
            >
              Jewlery
            </Button>
            <Button
              onClick={() => handleCategory("electronics")}
              gradientDuoTone="cyanToBlue"
              outline
            >
              Electronics
            </Button>
          </div>
          <div 
            className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7
          max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {filterCategories.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
