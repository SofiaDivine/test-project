import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/system";

const LogoLink = styled("a")({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  color: "#9c27b0",
  fontWeight: "bold",
  marginRight: "10px",
  backgroundColor: "#fef6e4",
  border: "2px solid #ff8c94",
  borderRadius: "20px",
  padding: "8px 16px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ff8c94",
    color: "#fef6e4",
    borderColor: "#ff8c94",
  },
});

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fef6e4",
        color: "#343a40",
        boxShadow: "none",
        borderBottom: "2px solid #ff8c94",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <LogoLink>
              <img
                src="/logo.png"
                alt="Logo"
                style={{
                  height: "60px",
                  marginRight: "10px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#ff8c94",
                }}
              >
                HAPPY STORE
              </Typography>
            </LogoLink>
          </Link>
        </Box>
        <Box>
          <Link href="/" passHref>
            <StyledButton>Home</StyledButton>
          </Link>
          <Link href="#contact" passHref>
            <StyledButton>Contact</StyledButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
