import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";
export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async() => {
      const response = await axios.get("http://localhost:3000/api/products"); 
        setProducts(response.data);
      };
    getHomeData();
  }, []);

  return (
    <>
      <link rel="icon" href="/images/home.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
