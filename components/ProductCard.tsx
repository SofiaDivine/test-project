import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    thumbnail?: string;
    category: string;
    brand: string;
    price: number;
    discountPercentage: number;
    rating: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 360,
        margin: "auto",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
        "&:hover": { transform: "scale(1.08)" },
        backgroundColor: "#ffffff",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
      }}
      onClick={handleCardClick}
    >
      {/* Discount Badge */}
      {product.discountPercentage > 0 && (
        <Chip
          label={`-${product.discountPercentage}%`}
          color="error"
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontWeight: "bold",
            borderRadius: "5px",
            background: "rgba(255, 0, 0, 0.8)",
            color: "#fff",
          }}
        />
      )}

      <CardMedia
        component="img"
        height="240"
        image={product.thumbnail || "/default-image.jpg"}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent
        sx={{
          textAlign: "center",
          backgroundColor: "#f9fafc",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{ color: "#343a40", fontWeight: "bold" }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.category} | {product.brand}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            gap: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#d32f2f",
              fontWeight: "bold",
              textDecoration: "line-through",
            }}
          >
            $
            {(product.price * (1 + product.discountPercentage / 100)).toFixed(
              2
            )}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#2e7d32", fontWeight: "bold" }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mt: 1 }}>
          ⭐ Rating: {product.rating.toFixed(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
