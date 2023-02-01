import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CarbonFootprintProvider } from "./context/carbon-footprint.context";
import { TreeSequestrationProvider } from "./context/tree-sequestration.context";
import { CalculatorComponentProvider } from "./context/calculator-index.context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CalculatorComponentProvider>
      <CarbonFootprintProvider>
        <TreeSequestrationProvider>
          <App />
        </TreeSequestrationProvider>
      </CarbonFootprintProvider>
      </CalculatorComponentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
