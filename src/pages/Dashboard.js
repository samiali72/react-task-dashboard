import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import StatCard from "../components/StatCard";
import RecentActivityTable from "../components/RecentActivityTable";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import Footer from "../components/footer";
import PieChart from "../components/pie-chart";
// import Barchart from "../components/barchart";

const Dashboard = () => {
  return (
    <Box sx={{ pt: 20 }}>
      <Typography variant="h3">Dashboard Overview</Typography>
      <br />
      {/* Grid for stats and pie chart */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<PeopleIcon />} label="Total Users" value="512" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard icon={<PersonAddIcon />} label="New Signups" value="53" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<AttachMoneyIcon />}
            label="Total Revenue"
            value="$ 20081"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            icon={<DesktopWindowsIcon />}
            label="Active Sessions"
            value="142"
          />
        </Grid>

         {/* New card with PieChart divided into two columns */}
         <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                {/* First column: Heading */}
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6">User Distribution</Typography>
                </Grid>

                {/* Second column: PieChart */}
                <Grid item xs={12} sm={8}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <PieChart />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <RecentActivityTable />
      <br />
      <hr />
      <Footer />
    </Box>
  );
};

export default Dashboard;
