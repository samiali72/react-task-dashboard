import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "auto",
        py: 2,
        bgcolor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.secondary,
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" color="inherit">
        © 2024 All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/" color="inherit" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="/Settings" color="inherit" sx={{ mx: 1 }}>
          Settings
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
