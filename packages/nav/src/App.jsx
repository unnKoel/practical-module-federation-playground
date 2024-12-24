import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "host/store";

import "./index.scss";

const App = () => (
  <Provider store={store}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header></Header>
      <div className="mt-10">Nav project</div>
    </div>
  </Provider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
