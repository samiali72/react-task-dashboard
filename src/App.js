import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // Track current theme mode

  // Define both Dark and Light Themes
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#90caf9" },
      secondary: { main: "#f48fb1" },
      background: { default: "#121212", paper: "#1d1d1d" },
      text: { primary: "#ffffff" },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
      background: { default: "#f5f5f5", paper: "#ffffff" },
      text: { primary: "#000000" },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          <Navbar
            isOpen={isOpen}
            handleThemeChange={handleThemeChange}
            darkMode={darkMode}
          />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: isOpen
                ? 0
                : `60px`,
              transition: "margin-left 0.3s",
            }}
          >
            {/* `${drawerWidthExpanded}px` */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
