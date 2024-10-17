import React from "react";
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";
import profilepic from "../assets/profile-pic.jpg";
import Footer from "../components/footer";

const Profile = () => {
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
        Profile
      </Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        mt: 2, // Add some top margin
        }}>
        <Grid container spacing={3} sx={{ width: '100%', maxWidth: '800px'}}>
          <Grid item xs={12} sm={4}>
            <Avatar
              sx={{ width: 120, height: 120, margin: "auto" }}
              src={profilepic}
              alt="Profile Picture"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">Muhammad Sami Ali</Typography>
            <Typography variant="body1">Email: edu.sami72@gmail.com</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: "auto" }}>
        <br />
        <hr />
        <Footer />
      </Box>
    </Box>
  );
};

export default Profile;
