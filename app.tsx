import "./segment";

import React from "react";
import { createRoot } from "react-dom/client";

let docRoot: HTMLElement = null;

document.addEventListener("DOMContentLoaded", () => {
  if (!!docRoot) {
    return;
  }

  docRoot = document.getElementById("root");

  const root = createRoot(docRoot);
  root.render(<h1>HELLO WORLD</h1>);
});
