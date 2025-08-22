import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Header/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
