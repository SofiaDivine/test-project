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
        maxWidth: 300,
        margin: "16px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(145deg, #f8ecec, #ffffff)",
        boxShadow:
          "4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7)",
        position: "relative",
        "&:hover": { transform: "scale(1.05)" },
      }}
      onClick={handleCardClick}
    >
      {/* Discount Badge */}
      {product.discountPercentage > 0 && (
        <Chip
          label={`-${product.discountPercentage}%`}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#ff6f61",
            color: "white",
            fontWeight: "bold",
          }}
        />
      )}

      <CardMedia
        component="img"
        height="200"
        image={product.thumbnail || "/default-image.jpg"}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent
        sx={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            color: "#343a40",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
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

        <Box
          sx={{
            mt: 2,
            backgroundColor: "#fce4ec",
            padding: "8px",
            borderRadius: "12px",
            boxShadow:
              "inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.7)",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "#9c27b0", fontWeight: "bold" }}
          >
            View the product
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
