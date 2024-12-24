import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { CountProvider } from "host/store";

import "./index.scss";

const App = () => (
  <CountProvider>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header></Header>
      <div className="mt-10">Nav project</div>
    </div>
  </CountProvider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
