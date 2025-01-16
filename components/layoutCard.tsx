import React from "react";
import { Card, Box, Typography } from "@mui/material";

interface LayoutCardProps extends React.PropsWithChildren<{}> {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  backgroundImage?: string;
}

const LayoutCard: React.FC<LayoutCardProps> = ({
  title,
  subtitle,
  children,
  footer,
  backgroundImage,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        margin: "auto",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
        background: backgroundImage
          ? `url(${backgroundImage}) no-repeat center/cover`
          : "#ffffff",
      }}
    >
      <Box sx={{ padding: 2, background: "rgba(255, 255, 255, 0.85)" }}>
        {title && (
          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "#343a40", fontWeight: "bold" }}
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
            {subtitle}
          </Typography>
        )}
        <Box>{children}</Box>
        {footer && <Box sx={{ mt: 2 }}>{footer}</Box>}
      </Box>
    </Card>
  );
};

export default LayoutCard;
