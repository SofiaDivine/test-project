import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 4, py: 2, backgroundColor: "#f5f5f5", textAlign: "center" }}>
      <Typography variant="body1" id="contact">
        Contact us:{" "}
        <Link href="mailto:contact@store.com">contact@store.com</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
