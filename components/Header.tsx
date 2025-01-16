import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

const LogoLink = styled("a")({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  color: "#ff69b4",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#fef6e4",
        height: "100%",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem>
          <Link href="/" passHref>
            <ListItemButton>
              <ListItemText
                primary="Home"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#ff69b4",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contact" passHref>
            <ListItemButton>
              <ListItemText
                primary="Contact"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#ff69b4",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

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
                  textDecoration: "none",
                }}
              >
                HAPPY STORE
              </Typography>
            </LogoLink>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Link href="/" passHref>
            <StyledButton>Home</StyledButton>
          </Link>
          <Link href="#contact" passHref>
            <StyledButton>Contact</StyledButton>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ color: "#ff69b4" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={handleDrawerToggle}
          >
            {drawerContent}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
