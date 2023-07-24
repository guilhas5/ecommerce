import{createContext, useState, useEffect} from "react"

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type Props = {
  children: React.ReactNode
}
const ProductContext = createContext<ProductType[]>([])
const ProductProvider = ({children}:Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products", error)
      }
    }
    fetchProducts()
  },[])

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext}