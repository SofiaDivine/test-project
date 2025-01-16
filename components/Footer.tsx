import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 3,
        backgroundColor: "#fef6e4",
        textAlign: "center",
        borderTop: "3px solid #ff8c94",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="body1"
        id="contact"
        sx={{ color: "#333333", fontWeight: "bold" }}
      >
        Contact us:{" "}
        <Link
          href="mailto:contact@store.com"
          sx={{
            color: "#ff8c94",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          contact@store.com
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
