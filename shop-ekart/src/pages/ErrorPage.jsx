import { Header } from "../components/Header";
import { HomePage } from "./home/HomePage";
import { Link } from "react-router";
import "./ErrorPage.css";
export function ErrorPage() {
  return (
    <div className="error-main-container">
      <Header />
      <h1 className="error-display-404">404</h1>
      <p className="error-display-msg">Page Not Found</p>
      <Link to="/">
        <button className="error-message-btn">Go Home</button>
      </Link>
    </div>
  );
}
