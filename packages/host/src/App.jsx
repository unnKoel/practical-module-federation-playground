import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import FederatedWrapper from "./federated-wrapper";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store, increment } from "host/store";

const Header = React.lazy(() => import("my-nav/Header"));

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <FederatedWrapper
        error={<div>Temporary Header</div>}
        delayed={<div>Loading header...</div>}
      >
        <Header />
      </FederatedWrapper>
      <div className="mt-10">Hi there, I'm some cool product.</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={() => dispatch(increment())}
      >
        Buy me!
      </button>
      <div>Cart count is {count}</div>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
