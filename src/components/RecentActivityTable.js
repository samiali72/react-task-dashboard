import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/recentActivities.json")
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) =>
        console.error("Error fetching recent activities:", error)
      );
  }, []);

  return (
    <Box>
      <br />
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Activity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.name}</TableCell>
                <TableCell>{activity.activity}</TableCell>
                <TableCell>{activity.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentActivities;
