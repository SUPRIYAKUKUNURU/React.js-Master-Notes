import React, { createContext } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import CompD from "./components/nameContext/CompD";

export const nameContext = createContext();

export default function App() {
  const name = "Supriya";
  return (
    <div>
      <CompA name={name} />
      <nameContext.Provider value={name}>
        <CompD />
      </nameContext.Provider>
    </div>
  );
}
