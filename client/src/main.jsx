import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
=======
import { createRoot } from "react-dom/client";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionsProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </ErrorBoundary>
);


>>>>>>> 4c32b1d32a34cb177f494169cdc6f553004a39ff
