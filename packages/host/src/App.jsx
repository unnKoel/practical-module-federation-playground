import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import FederatedWrapper from "./federated-wrapper";
import { CountProvider, useCount } from "host/store";

const Header = React.lazy(() => import("my-nav/Header"));

const App = () => {
  const [itemCount, setItemCount] = useCount();
  const onAddToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <FederatedWrapper
        error={<div>Temporary Header</div>}
        delayed={<div>Loading header...</div>}
      >
        <Header/>
      </FederatedWrapper>
      <div className="mt-10">Hi there, I'm some cool product.</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={onAddToCart}
      >
        Buy me!
      </button>
      <div>Cart count is {itemCount}</div>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <CountProvider>
    <App />
  </CountProvider>
);
