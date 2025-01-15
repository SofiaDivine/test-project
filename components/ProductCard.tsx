import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

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
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brand: {product.brand}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 1,
          }}
        >
          <Typography variant="body1">${product.price.toFixed(2)}</Typography>
          <Typography variant="body2" color="success.main">
            -{product.discountPercentage}%
          </Typography>
        </Box>
        <Typography variant="body2">
          Rating: {product.rating.toFixed(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
