import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./../styles/global.css";
import GlobalProvider from "@/shared/providers/global/GlobalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
);
