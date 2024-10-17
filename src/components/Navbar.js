import React from "react";
import { AppBar, Toolbar, Button, Switch, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/hrm-logo (2).png";


const Navbar = ({ isOpen, handleThemeChange, darkMode }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // stays on top
        transition: "margin-left 0.3s",
        ml: isOpen ? `240px` : `60px`,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, pl: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "30px", marginLeft: "20px" }}
          />
        </Box>

        <h4>DARK THEME</h4>
        <Switch checked={darkMode} onChange={handleThemeChange} />

        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
