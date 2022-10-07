import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./ui/GlobalStyles";
import "./firebase";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);
