import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailPage from "./pages/JobDetailPage";
import LoginPage from "./pages/LoginPage";
import AuthRequire from "./hooks/AuthRequire";

const theme = {
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: red[500],
      },
    },
  }),
  default: createTheme({
    palette: {
      mode: "light",
    },
  }),
};

function App() {
  let location = useLocation();
  let state = location.state;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={prefersDarkMode ? theme.dark : theme.default}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="jobs/:jobId" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="jobs/:jobId"
          element={
            <AuthRequire>
              <JobDetailPage />
            </AuthRequire>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
