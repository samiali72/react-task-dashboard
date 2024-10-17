import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import profilepic from "../assets/profile-pic.jpg";

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 60;

const Sidebar = ( {darkMode} ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: isOpen ? drawerWidthExpanded : drawerWidthCollapsed,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isOpen ? drawerWidthExpanded : drawerWidthCollapsed,
            transition: "width 0.3s",
          },
        }}
      >
        <div>
          <IconButton
            onClick={toggleDrawer}
            sx={{
              justifyContent: isOpen ? "flex-end" : "center",
              p: 2,
              ml: isOpen ? "-227px" : "-52px",
            }}
          >
            {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Divider />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Dashboard" sx={{ color: darkMode ? "white" : "black" }}/>}
            </ListItem>

            <ListItem button component={Link} to="/profile">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Profile" sx={{ color: darkMode ? "white" : "black" }}/>}
            </ListItem>

            <ListItem button component={Link} to="/settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Settings" sx={{ color: darkMode ? "white" : "black" }}/>}
            </ListItem>
          </List>

          <Divider sx={{ mt: 2 }} />
          {/* Profile Avatar and Name Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              position: "absolute",
              bottom: 16,
              left: 16,
              right: 16,
              color: darkMode ? "white" : "black",
              justifyContent: isOpen ? "flex-start" : "center", // Center avatar when collapsed
            }}
          >
            <Avatar alt="User Name" src={profilepic} sx={{ width: 40, height: 40 }} />
            {isOpen && (
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                Muhammad Sami Ali
              </Typography>
            )}
          </Box>
        </div>
      </Drawer>

      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: "fixed",
          top: 16,
          left: isOpen
            ? `${drawerWidthExpanded}px`
            : `${drawerWidthCollapsed}px`,
          transition: "left 0.3s",
          zIndex: (theme) => theme.zIndex.drawer + 2, 
          ml: isOpen ? "-227px" : "-52px",
        }}
      >
        {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
    </>
  );
};

export default Sidebar;
