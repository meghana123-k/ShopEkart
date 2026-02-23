import { Header } from "../components/Header";
import { HomePage } from "./home/HomePage";
import { Link } from "react-router";
import "./ErrorPage.css";
import { Footer } from "../components/Footer";
export function ErrorPage({ cart }) {
  return (
    <>
      <title>404 Page Not Found</title>
      <div className="error-main-container">
        <Header cart={cart}/>
        <h1 className="error-display-404">404</h1>
        <p className="error-display-msg">Page Not Found</p>
        <Link to="/">
          <button className="error-message-btn">Go Home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
