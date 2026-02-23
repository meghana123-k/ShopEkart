import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./LoginPage.css";
export function LoginPage() {
  return (
    <>
      <Header />
      <div className="login-page">
        <div className="login-card">
          <h1 className="login-title">Login</h1>

          <form className="login-form">
            <input
              className="login-input"
              type="text"
              placeholder="User name"
              autoComplete="username"
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button type="submit" className="login-submit">
              Login
            </button>
          </form>

          <p className="register-text">Or register with</p>
          <div className="social-buttons">
            <button
              type="button"
              aria-label="Register with Google"
              className="social-button"
            >
              G
            </button>
            <button
              type="button"
              aria-label="Register with Facebook"
              className="social-button"
            >
              f
            </button>
            <button
              type="button"
              aria-label="Register with Apple"
              className="social-button"
            >
              A
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
