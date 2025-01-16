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
        sx={{ p: 4, backgroundColor: "#f0f4f8", minHeight: "100vh" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
