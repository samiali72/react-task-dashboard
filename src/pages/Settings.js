import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/footer";

const Settings = () => {
  return (
    <Box
      sx={{
        pt: 20,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Box sx={{ mt: "auto" }}>
        <br />
        <hr />
        <Footer />
      </Box>
    </Box>
  );
};

export default Settings;
