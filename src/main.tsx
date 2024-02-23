import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
    <Footer />
  </BrowserRouter>
);
