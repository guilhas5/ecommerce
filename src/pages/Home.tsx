import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Button } from "flowbite-react";

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
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7
          max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            <div className="flex justify-between">
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
            {filterCategories.map((product) => (
              <div key={product.id}>{product.title}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
