import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Button } from "flowbite-react";
import Product from "../components/Product";

const Home = () => {
  const products = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  console.log(products);

  const filterCategories = products.filter((product) => {
    return selectedCategory === "" || product.category === selectedCategory;
  });

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <section className="py-20">
            <div className="flex justify-center gap-5">
              <Button
                onClick={() => handleCategory("")}
                gradientDuoTone="purpleToBlue"
                outline
              >
                All
              </Button>
              <Button
                onClick={() => handleCategory("women's clothing")}
                gradientDuoTone="purpleToBlue"
                outline
              >
                Women's
              </Button>
              <Button
                onClick={() => handleCategory("men's clothing")}
                gradientDuoTone="purpleToBlue"
                outline
              >
                Mens
              </Button>
              <Button
                onClick={() => handleCategory("jewelery")}
                gradientDuoTone="purpleToBlue"
                outline
              >
                Jewlery
              </Button>
            </div>
      
        <div className="container mx-auto">
            <div
            className="pt-12 grid center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7
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
