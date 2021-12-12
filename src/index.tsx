import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";

import { ThemeProvider } from "styled-components";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
