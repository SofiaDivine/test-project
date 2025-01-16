import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 4, py: 2, backgroundColor: "#f5f5f5", textAlign: "center" }}>
      <Typography variant="body1">
        Contact us:{" "}
        <Link href="mailto:contact@store.com">contact@store.com</Link>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="/terms">Order Conditions</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
