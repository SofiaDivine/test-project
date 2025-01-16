import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

interface LayoutProps extends React.PropsWithChildren<{}> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          p: 6,
          backgroundColor: "#faf3f3",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
