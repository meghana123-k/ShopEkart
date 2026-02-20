import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" href="/images/home.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>
  );
}
