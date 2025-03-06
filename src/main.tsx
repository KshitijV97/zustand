import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store as reduxStore } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Redux requires a Provider to wrap the application */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>
);
