import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({ icon, label, value }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          {/* First Row: Label on the Left, Icon on the Right */}
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="subtitle1">{label}</Typography>
            <Box>{React.cloneElement(icon, { fontSize: "large" })}</Box>
          </Box>
          {/* Second Row: Value */}
          <Typography variant="h6" mt={1}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;
