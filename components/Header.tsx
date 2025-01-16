import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f8f9fa", color: "#343a40" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              component="a"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{
                  height: "60px",
                  marginRight: "10px",
                }}
              />
              <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                HAPPY STORE
              </span>
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link href="/" passHref>
            <Button
              sx={{ color: "#343a40", fontWeight: "bold", marginRight: "10px" }}
            >
              Home
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              sx={{ color: "#343a40", fontWeight: "bold", marginRight: "10px" }}
            >
              Conditions
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button sx={{ color: "#343a40", fontWeight: "bold" }}>
              Contact
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
